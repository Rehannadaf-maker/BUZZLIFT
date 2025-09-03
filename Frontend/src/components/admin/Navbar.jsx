export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hello, Admin 👋</span>
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </header>
  );
}
