// src/components/ProductCard.js
import React from "react";
import { motion } from "framer-motion";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <motion.button
        className="add-to-cart"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;