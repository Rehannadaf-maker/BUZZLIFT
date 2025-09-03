import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [loading, setLoading] = useState(true);

  // Fetch cart on page load
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/cart", {
          withCredentials: true, // important if you use cookies/auth
        });
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Remove item from cart
  const handleRemove = async (productId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/cart/${productId}`,
        { withCredentials: true }
      );
      setCart(data);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  if (loading) return <p className="p-6 text-center">Loading cart...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-6">
          {cart.items.map((item) => (
            <div
              key={item.product}
              className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    {item.qty} × ₹{item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.product)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center border-t pt-6">
            <h2 className="text-xl font-bold">Total</h2>
            <p className="text-xl font-semibold">₹{cart.totalPrice}</p>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-bold hover:bg-red-600 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
