import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch {
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || p.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/3 p-3 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 border rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="hoodies">Hoodies</option>
          <option value="sneakers">Sneakers</option>
          <option value="jackets">Jackets</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* 🛒 Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
            >
              <Link to={`/products/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
              </Link>
              <Link
                to={`/products/${product._id}`}
                className="mt-4 bg-red-500 text-white text-center py-2 rounded-lg hover:bg-red-600 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
