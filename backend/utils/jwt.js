const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "super-secret-change-me";

function sign(user) {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role || "user", name: user.name },
    SECRET,
    { expiresIn: "8h" }
  );
}

function verify(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

module.exports = { sign, verify };