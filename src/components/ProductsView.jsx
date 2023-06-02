import ProductCategory from "./ProductCategory";
import CategoryItem from "./CategoryItem";
import { useState } from "react";

const ProductsView = ({ apiData, selectedItem }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      products view
      <ProductCategory
        apiData={apiData}
        onSelectCategory={handleCategorySelection}
      />
      {selectedCategory && (
        <CategoryItem
          apiData={apiData}
          selectedCategory={selectedCategory}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
};

export default ProductsView;
