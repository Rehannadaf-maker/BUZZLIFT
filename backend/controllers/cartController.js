import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// Get user cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    if (!cart) return res.status(200).json({ items: [], totalPrice: 0 });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [], totalPrice: 0 });
    }

    const itemIndex = cart.items.findIndex((item) => item.product.equals(productId));

    if (itemIndex > -1) {
      cart.items[itemIndex].qty += qty;
    } else {
      cart.items.push({
        product: product._id,
        name: product.name,
        qty,
        price: product.price,
        image: product.image,
      });
    }

    cart.totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart", error });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter((item) => !item.product.equals(productId));
    cart.totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error removing item", error });
  }
};
