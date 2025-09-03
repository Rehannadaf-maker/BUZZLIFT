import { useState } from "react";

export default function ProductForm() {
  const [formData, setFormData] = useState({ name: "", price: "", img: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", formData);
    setFormData({ name: "", price: "", img: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 rounded"
        />
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Add Product
      </button>
    </form>
  );
}
