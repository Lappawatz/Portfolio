import express from "express";
import mongoose from "mongoose";

let skillSchema = new mongoose.Schema({
  name: String,
  category: String,
});

let Skill = mongoose.model("Skill", skillSchema);

export default Skill;
