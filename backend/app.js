import express from "express";
import cors from "cors";
import skillRoutes from "./routers/skillRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/skills", skillRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app; // ✅ ตรงนี้สำคัญ
