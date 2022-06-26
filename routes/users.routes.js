const { Router } = require("express");
const Users = require("../models/Users");
const router = Router();

router.get("", async (req, res) => {
  try {
    // const users = await Users.find();
    const users = await Users.find().select('id fullName');
    res.json({ users });
  } catch (e) {
    console.log(e);
    res.status(500).json({ massage: "Что-то не так, попробуйте снова" });
  }
});

module.exports = router;
