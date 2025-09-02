const express = require("express");
const { getCart, addToCart, removeFromCart, clearCart } = require("../controller/CartController");

const router = express.Router();

// Get user cart
router.get("/:userId", getCart);

// Add product to cart
router.post("/:userId/add/:productId", addToCart);

// Remove product from cart
router.delete("/:userId/remove/:productId", removeFromCart);

// Clear cart
router.delete("/:userId/clear", clearCart);

module.exports = router;