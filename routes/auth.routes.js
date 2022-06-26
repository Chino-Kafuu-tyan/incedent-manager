const { Router } = require("express");
const Users = require("../models/Users");
const { check, validationResult } = require("express-validator");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth.middleware");
const router = Router();

const createToken = (user) =>
  jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

router.post(
  "/registration",
  [
    check("password", "Минимальная длинная пароля 4 символа").isLength({
      min: 4,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }

      const { fullName, login, password, dateOfBirth, position } = req.body;

      const candidate = await Users.findOne({ login });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким Логином уже существует" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new Users({
        fullName,
        login,
        password: hashedPassword,
        dateOfBirth,
        position,
      });

      await user.save();

      res.status(201).json({ message: "Пользователь создан" });
    } catch (e) {
      res.status(500).json({ massage: "Что-то не так, попробуйте снова" });
    }
  }
);

router.post(
  "/login",
  [check("password", "Введите пароль").exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при входе в систему",
        });
      }

      const { login, password } = req.body;

      const user = await Users.findOne({ login });
      const currentUser = user.fullName

      if (!user) {
        return res.status(400).json({ message: "Неверный логин или пароль" });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({message: "Неверный логин или пароль"});
      }

      const token = createToken(user);

      res.json({token, currentUser});
    } catch (e) {
      console.log(e);
      res.status(500).json({ massage: "Что-то не так, попробуйте снова" });
    }
  }
);

router.get("/refresh", authMiddleware, async (req, res) => {
  try {
    const user = await Users.findById(req.user.userId);

    const token = createToken(user);
    const currentUser = user.fullName
    res.json({ token, currentUser});
  } catch (e) {
    res.status(500).json({ massage: "Что-то не так, попробуйте снова" });
  }
});

module.exports = router;
