const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/api/products`);
  return res.json();
};


export const loginUser = async (credentials) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
};
