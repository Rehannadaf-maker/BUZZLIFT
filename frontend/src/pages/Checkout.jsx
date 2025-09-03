import { useState } from "react";
import api from "../utils/api";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      await api.post("/orders", form);
      alert("Order placed successfully!");
    } catch {
      alert("Failed to place order. Try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleOrder} className="space-y-6 bg-white shadow-md p-8 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full p-3 border rounded-lg"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full p-3 border rounded-lg"
          value={form.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          className="w-full p-3 border rounded-lg"
          value={form.postalCode}
          onChange={handleChange}
          required
        />

        {/* Payment Method */}
        <div>
          <label className="block font-medium mb-2">Payment Method</label>
          <select
            name="payment"
            className="w-full p-3 border rounded-lg"
            value={form.payment}
            onChange={handleChange}
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
