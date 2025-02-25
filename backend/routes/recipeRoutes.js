import express from "express";
import Recipe from "../models/Recipe.js";
import auth from "../middleware/auth.js";
import router from "./authRoutes.js";


// Create Recipe (Protected Route)
router.post("/", auth, async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newRecipe = new Recipe({
      user: req.user.id, // Get user ID from token
      title,
      ingredients,
      instructions,
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe created successfully", recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
