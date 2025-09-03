import express from "express";
import protect from "../middleware/authMiddleware.js";
import Order from "../models/order.js";

const router = express.Router();

// ✅ Get logged-in user's orders
router.get("/myorders", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

export default router;
