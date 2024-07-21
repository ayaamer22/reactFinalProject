import React from 'react';


const ProductDetail = ({ product }) => {
  if (!product) return null; // Ensure there's a product to display

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} /> {/* Adjust based on actual property */}
      <p>{product.description}</p> {/* Adjust based on actual property */}
      <p>Price: ${product.price}</p> {/* Adjust based on actual property */}
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;
