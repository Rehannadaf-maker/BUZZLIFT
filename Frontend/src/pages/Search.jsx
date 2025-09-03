import { useState } from "react";
import api from "../utils/api";
import ProductCard from "../components/ProductCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await api.get(`/products/search?q=${query}`);
      setResults(res.data);
    } catch {
      setResults([]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <form onSubmit={handleSearch} className="flex mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-grow p-3 border rounded-l-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-6 rounded-r-lg hover:bg-red-600"
        >
          Search
        </button>
      </form>

      {results.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
