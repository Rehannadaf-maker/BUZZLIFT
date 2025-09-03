import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <motion.img
        src="/astronaut.png" 
        alt="Astronaut"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: -20, opacity: 1 }}
        transition={{ yoyo: Infinity, duration: 2 }}
        className="w-48 mb-6"
      />
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-600">Oops! Page not found 🚀</p>
    </div>
  );
}
