import { useEffect, useState } from "react";
import api from "../utils/api"; // axios instance (make sure baseURL is set)

export default function Profile() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user info
        const userRes = await api.get("/users/profile"); // backend route
        setUser(userRes.data);

        // Fetch user orders
        const ordersRes = await api.get("/orders/myorders");
        setOrders(ordersRes.data);
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">You must be logged in to view profile</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* User Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Edit Profile
        </button>
      </div>

      {/* Orders */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">My Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders yet.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">Order #{order._id}</p>
                  <p className="text-gray-600">
                    {order.items.length} item(s) — ₹{order.totalPrice}
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      order.isPaid ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Pending"}
                  </p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
