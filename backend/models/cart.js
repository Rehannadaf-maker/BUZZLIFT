import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });

  // Fetch cart on load
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/cart", {
          withCredentials: true, // if you're using cookies for auth
        });
        setCart(data);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };
    fetchCart();
  }, []);

  // Remove item
  const removeItem = async (productId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/cart/${productId}`,
        { withCredentials: true }
      );
      setCart(data);
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.items.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty.{" "}
          <Link to="/products" className="text-red-500 font-semibold">
            Shop Now
          </Link>
        </p>
      ) : (
        <div className="space-y-6">
          {cart.items.map((item) => (
            <div
              key={item.product}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.product)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-xl">
            Total: ₹{cart.totalPrice}
          </div>

          <Link
            to="/checkout"
            className="block text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
