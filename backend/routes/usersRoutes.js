import express from "express";

const router = express.Router();

// Example user routes
router.get("/", (req, res) => {
  res.send("User API is working 🚀");
});

router.post("/register", (req, res) => {
  res.json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
  res.json({ message: "User logged in successfully" });
});

export default router;

