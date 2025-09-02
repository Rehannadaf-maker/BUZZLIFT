function isEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function isStrongPassword(password) {
  return password.length >= 6;
}

module.exports = { isEmail, isStrongPassword };