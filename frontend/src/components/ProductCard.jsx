import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="inline-block mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}
