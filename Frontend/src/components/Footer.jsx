export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-blue-400">Buzzlift</span>. 
        All rights reserved.
      </p>
      <p className="mt-2 text-xs">
        Crafted with ❤️ using React & Framer Motion.
      </p>
    </footer>
  );
}
