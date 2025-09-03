import { motion } from "framer-motion";

export default function CategoryTile({ category }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-2xl transition"
    >
      <img
        src={category.img}
        alt={category.name}
        className="rounded-lg w-full h-48 object-cover mb-3"
      />
      <h3 className="text-lg font-semibold text-center">{category.name}</h3>
    </motion.div>
  );
}
