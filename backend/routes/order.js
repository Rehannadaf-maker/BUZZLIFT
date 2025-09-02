const express = require("express");
const { createOrder, getOrders } = require("../controller/OrderController");

const router = express.Router();

// Create new order
router.post("/", createOrder);

// Get all orders of a user
router.get("/:userId", getOrders);

module.exports = router;