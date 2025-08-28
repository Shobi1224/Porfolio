import express from "express";
import Skill from "../models/Skill.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// Add new
router.post("/", async (req, res) => {
  const newSkill = new Skill(req.body);
  await newSkill.save();
  res.json(newSkill);
});

// Update
router.put("/:id", async (req, res) => {
  const updated = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
