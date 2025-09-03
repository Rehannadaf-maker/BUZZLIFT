import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "hover:text-blue-500 transition";

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Buzzlift 🚀
      </Link>

      {/* Navigation */}
      <div className="flex gap-6 text-lg">
        <NavLink to="/" className={navLinkClasses}>Home</NavLink>
        <NavLink to="/products" className={navLinkClasses}>Products</NavLink>
        <NavLink to="/about" className={navLinkClasses}>About</NavLink>
        <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
      </div>
    </nav>
  );
}
