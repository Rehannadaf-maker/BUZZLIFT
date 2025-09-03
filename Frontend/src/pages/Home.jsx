import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 🚀 Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <Rocket size={80} className="text-red-500 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
            Welcome to <span className="text-red-500">Buzzlift</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl">
            Elevating your style with the trendiest apparel & gear 🚀
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link
              to="/products"
              className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-red-600 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 📂 Category Tiles */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Hoodies", img: "https://images.unsplash.com/photo-1602810318383-e74f438cfdf6" },
            { name: "Sneakers", img: "https://images.unsplash.com/photo-1606813902917-52de6f8d6c4d" },
            { name: "Jackets", img: "https://images.unsplash.com/photo-1544441893-675973e3198f" },
            { name: "Accessories", img: "https://images.unsplash.com/photo-1512499617640-c2f999098f29" },
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-2xl transition"
            >
              <img src={cat.img} alt={cat.name} className="rounded-xl mb-4 w-full h-56 object-cover" />
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🛒 Featured Products */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Buzzlift Hoodie", img: "https://images.unsplash.com/photo-1602810318383-e74f438cfdf6" },
            { name: "Buzzlift Sneakers", img: "https://images.unsplash.com/photo-1606813902917-52de6f8d6c4d" },
            { name: "Buzzlift Backpack", img: "https://images.unsplash.com/photo-1603782292293-dc2e6b8a2a2d" },
          ].map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">Starting ₹1,999</p>
                <Link
                  to="/products"
                  className="inline-block mt-3 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800"
                >
                  View Product
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ Testimonials */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Why Buzzlift?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Amazing quality products, I love the Buzzlift hoodie! – Aditi",
            "Fast delivery & trendy designs 🔥 – Rahul",
            "Best online shopping experience ever 🚀 – Sneha",
          ].map((review, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
            >
              <Star className="text-yellow-500 mb-3" size={28} />
              <p className="text-gray-700 italic">“{review}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎯 Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-700 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Lift Off?</h2>
        <p className="mt-4 text-lg">Shop now and experience fashion beyond limits.</p>
        <Link
          to="/products"
          className="mt-8 inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Start Shopping
        </Link>
      </section>
    </div>
  );
}
