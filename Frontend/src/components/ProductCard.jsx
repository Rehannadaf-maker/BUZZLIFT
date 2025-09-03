import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ y: -8 }}
    >
      {/* Product Image */}
      <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>
          <motion.button
            className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium shadow-md hover:bg-gray-800 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
