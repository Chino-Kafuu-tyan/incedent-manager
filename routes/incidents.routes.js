const { Router } = require("express");
const Incidents = require("../models/Incidents");
const router = Router();

router.post("", async (req, res) => {
  try {
    const {
      area,
      description,
      dueDate,
      priority,
      startDate,
      status,
      title,
      assignee,
    } = req.body;

    const incident = new Incidents({
      area,
      description,
      dueDate,
      priority,
      startDate,
      status,
      title,
      assignee,
    });

    await incident.save();

    res.status(201).json({ message: "Инцидент создан" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ massage: "Что-то не так, попробуйте снова" });
  }
});

router.get("", async (req, res) => {
  try {
    const incidents = await Incidents.find();

    res.json({ incidents });
  } catch (e) {
    res.status(500).json({ massage: "Что-то не так, попробуйте снова" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Incidents.findByIdAndDelete(id);

    res.status(201).json({ message: "Инцидент удален" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ massage: "Что-то не так, попробуйте снова" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const {
      area,
      description,
      dueDate,
      priority,
      startDate,
      status,
      title,
      assignee,
    } = req.body;

    const { id } = req.params;

    await Incidents.findByIdAndUpdate(
      id,
      {
        area,
        description,
        dueDate,
        priority,
        startDate,
        status,
        title,
        assignee,
      },
      { new: true }
    );

    res.status(201).json({ message: "Инцидент обновлён" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ massage: "Что-то не так, попробуйте снова" });
  }
});

module.exports = router;
