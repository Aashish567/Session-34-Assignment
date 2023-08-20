
//Implement CRUD operations

// controllers/productController.js
const Product = require('../models/Product');

// Create a new product
const createProduct = async (productData) => {
  return await Product.create(productData);
};

// Read a single product by ID
const getProductById = async (productId) => {
  return await Product.findById(productId);
};

// Read a single product by name
const getProductByName = async (productName) => {
  return await Product.findOne({ name: productName });
};

// Read all products
const getAllProducts = async () => {
  return await Product.find();
};

// Update a product by ID
const updateProductById = async (productId, updateData) => {
  return await Product.findByIdAndUpdate(productId, updateData, { new: true });
};

// Delete a product by ID
const deleteProductById = async (productId) => {
  return await Product.findByIdAndDelete(productId);
};

module.exports = {
  createProduct,
  getProductById,
  getProductByName,
  getAllProducts,
  updateProductById,
  deleteProductById,
};
