import { useState, useEffect } from "react";
import api from "../utils/api";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await api.get("/wishlist");
        setWishlist(res.data);
      } catch {
        setWishlist([]);
      }
    };
    fetchWishlist();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white shadow-md rounded-xl p-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
              <Link
                to={`/products/${item._id}`}
                className="inline-block mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
