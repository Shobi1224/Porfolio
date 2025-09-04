import express from "express";
import Project from "../models/Project.js";
const router = express.Router();


router.post("/", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});


router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});


router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});


router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
