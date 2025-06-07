import express from "express";
import Message from "../models/message.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "มีข้อผิดพลาดในการดึงข้อมูลข้อความ" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received data:", req.body);

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "กรุณาระบุ name และ email และ message" });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "มีข้อผิดพลาดในการบันทึกข้อความ" });
  }
});

export default router;
