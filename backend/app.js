import express from "express";
import cors from "cors";
import skillRoutes from "./routers/skillRoutes.js";
import messageRoutes from "./routers/messageRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/skills", skillRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app; // ✅ ตรงนี้สำคัญ
