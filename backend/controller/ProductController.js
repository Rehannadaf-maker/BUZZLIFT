const { readData, writeData } = require("../config/ProductController");

// Get all products
function getProducts(req, res) {
  const db = readData();
  res.json(db.products);
}

// Get single product
function getProduct(req, res) {
  const db = readData();
  const product = db.products.find((p) => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
}

// Add product (admin only)
function addProduct(req, res) {
  const db = readData();
  const newProduct = { id: Date.now(), ...req.body };
  db.products.push(newProduct);
  writeData(db);
  res.status(201).json(newProduct);
}

module.exports = { getProducts, getProduct, addProduct };