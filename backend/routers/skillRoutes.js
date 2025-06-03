import express from "express";
import mongoose from "mongoose";
import Skill from "../models/skill.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res
      .status(500)
      .json({ message: "มีข้อผิดพลาดในการดึงข้อมูลสกิลเพื่อนำไปใช้งาน" });
  }
});

router.post("/", async (req, res) => {
  const { name, category } = req.body;
  console.log("Received data:", req.body);

  if (!name || !category) {
    return res.status(400).json({ message: "กรุณาระบุ name และ category" });
  }

  try {
    const skill = new Skill({ name, category });
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error("Error saving skill:", error);
    res.status(500).json({ message: "มีข้อผิดพลาดในการบันทึกสกิล" });
  }
});

export default router;
