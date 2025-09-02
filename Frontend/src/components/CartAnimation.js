import React, { useState, useEffect } from "react";
import "../styles.css"; // make sure this file exists

const CartAnimation = ({ image, trigger }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (trigger) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 800);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!trigger) return null;

  return (
    <img
      src={image}
      alt="Flying product"
      className={`cart-fly ${animate ? "animate" : ""}`}
      style={{
        left: trigger.x,
        top: trigger.y,
        position: "absolute",
      }}
    />
  );
};

export default CartAnimation;