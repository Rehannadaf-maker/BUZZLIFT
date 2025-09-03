import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Buzzlift Hoodie",
    price: "₹1,999",
    image: "https://via.placeholder.com/400x500.png?text=Buzzlift+Hoodie",
  },
  {
    id: 2,
    name: "Buzzlift Sneakers",
    price: "₹3,499",
    image: "https://via.placeholder.com/400x500.png?text=Buzzlift+Sneakers",
  },
  {
    id: 3,
    name: "Buzzlift Jacket",
    price: "₹4,299",
    image: "https://via.placeholder.com/400x500.png?text=Buzzlift+Jacket",
  },
  {
    id: 4,
    name: "Buzzlift Backpack",
    price: "₹2,199",
    image: "https://via.placeholder.com/400x500.png?text=Buzzlift+Backpack",
  },
];

export default function Products() {
  const [message, setMessage] = useState("");

  const handleAddToCart = (productName) => {
    setMessage(`🎉 Thanks for shopping! ${productName} added to cart.`);
    setTimeout(() => setMessage(""), 3000); // Hide after 3 sec
  };

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Success Message */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
        >
          <CheckCircle size={20} />
          {message}
        </motion.div>
      )}

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">Shop Buzzlift</h1>

      {/* Filter Bar */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">{products.length} Products</p>
        <select className="border rounded-lg px-4 py-2 shadow-sm">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleAddToCart(product.name)}
                className="mt-3 flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800"
              >
                <ShoppingCart size={18} /> Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
