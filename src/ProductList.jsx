const ProductList = ({ products, onProductClick }) => (
  <div className="product-list">
    {products.map(product => (
      <div
        key={product.id} // Ensure this is unique
        onClick={() => onProductClick(product.id)}
      >
        {product.name}
      </div>
    ))}
  </div>
);
export default ProductList;