import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams(); // product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/cart",
        {
          productId: product._id,
          qty: 1,
        },
        { withCredentials: true }
      );
      setMessage("✅ Added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      setMessage("❌ Could not add to cart.");
    }
  };

  if (loading) return <p className="p-6 text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg shadow"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">₹{product.price}</p>

          <button
            onClick={handleAddToCart}
            className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition"
          >
            Add to Cart
          </button>

          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}
