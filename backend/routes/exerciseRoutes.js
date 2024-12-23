const express = require("express");
const router = express.Router();
const Exercise = require("../models/Exercise");

// Get all exercises
router.get("/", async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

// Add new exercise
router.post("/", async (req, res) => {
  const { name, trainer } = req.body;
  const newExercise = new Exercise({ name, trainer });
  await newExercise.save();
  res.status(201).json(newExercise);
});

module.exports = router;
