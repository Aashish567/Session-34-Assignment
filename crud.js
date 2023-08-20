
// File for all CRUD functions

const db = require('./db/db');
const productController = require('./controllers/productController');

(async () => {
  try {
    // Create a new product
    const newProduct = await productController.createProduct({
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 19.99,
      quantity: 50,
    });
    console.log('New Product:', newProduct);

    // Read a single product by ID
    const foundProductById = await productController.getProductById(newProduct._id);
    console.log('Product by ID:', foundProductById);

    // Read a single product by name
    const foundProductByName = await productController.getProductByName('Product 1');
    console.log('Product by Name:', foundProductByName);

    // Read all products
    const allProducts = await productController.getAllProducts();
    console.log('All Products:', allProducts);

    // Update a product by ID
    const updatedProduct = await productController.updateProductById(newProduct._id, {
      price: 24.99,
      quantity: 30,
    });
    console.log('Updated Product:', updatedProduct);

    // Delete a product by ID
    const deletedProduct = await productController.deleteProductById(newProduct._id);
    console.log('Deleted Product:', deletedProduct);

  } catch (error) {
    console.error('Error:', error);
  }
})();
