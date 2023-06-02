const ProductCategory = ({ apiData, onSelectCategory }) => {
  const categories = [...new Set(apiData.map((item) => item.category))];

  const handleCategorySelection = (category) => {
    onSelectCategory(category);
  };

  return (
    <div>
      {categories.map((category, i) => {
        return (
          <ul className="cursor-pointer" key={i}>
            <li onClick={() => handleCategorySelection(category)}>
              {category}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductCategory;
