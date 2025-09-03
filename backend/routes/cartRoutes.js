import express from "express";
import { getCart, addToCart, removeFromCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js"; // middleware to check login

const router = express.Router();

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/:productId", protect, removeFromCart);

export default router;
