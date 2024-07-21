import React from 'react';


const CategoryList = ({ categories, onCategoryClick }) => (
  <div className="category-list">
    {categories.map((category, index) => (
      <div
        key={index} // Ideally, use a unique identifier like category.slug or category.id
        onClick={() => onCategoryClick(category)}
      >
        {/* Ensure that you're rendering properties of the category, not the object itself */}
        {category.name} {/* Adjust this to match the actual property of your category object */}
      </div>
    ))}
  </div>
);

export default CategoryList;

