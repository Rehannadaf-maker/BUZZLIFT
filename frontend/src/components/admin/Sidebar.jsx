import { LayoutDashboard, Package, ShoppingCart, Users, Settings } from "lucide-react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "users", label: "Users", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6 text-2xl font-bold text-red-500">Buzzlift Admin</div>
      <nav className="flex-1">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActivePage(id)}
            className={`flex items-center gap-3 w-full px-6 py-3 text-left hover:bg-red-50 ${
              activePage === id ? "bg-red-100 text-red-600 font-semibold" : "text-gray-700"
            }`}
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
