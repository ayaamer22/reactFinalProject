import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      console.log("Fetching categories...");
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      setCategories(data);
      console.log('Categories:', data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      console.log("Fetching all products...");
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      console.log('All Products:', data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      console.log(`Fetching products for category: ${category}...`);
      const response = await fetch(`https://dummyjson.com/products/category=${categoryId}`);
      const data = await response.json();
      setProducts(data.products);
      console.log(`Products for category ${category}:`, data.products);
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
    }
  };

  const fetchSingleProduct = async (productId) => {
    try {
      console.log(`Fetching product with ID: ${productId}...`);
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setSelectedProduct(data);
      console.log(`Product ${productId}:`, data);
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
    }
  };

  const handleCategoryClick = (category) => {
    console.log(`Category clicked: ${category}`);
    fetchProductsByCategory(category);
  };

  const handleProductClick = (productId) => {
    console.log(`Product clicked: ${productId}`);
    fetchSingleProduct(productId);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <CategoryList
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        <ProductList
          products={products}
          onProductClick={handleProductClick}
        />
        {selectedProduct && <ProductDetail product={selectedProduct} />}
      </div>
    </div>
  );
};

export default App;

