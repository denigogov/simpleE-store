import ProductCard from "./ProductCard";

const CategoryItem = ({ selectedCategory, apiData, selectedItem }) => {
  return (
    <div className="lg:grid grid-cols-4 justify-items-center	">
      {apiData
        .filter((item) => {
          return item.category === selectedCategory;
        })
        .map((item) => {
          return (
            <ProductCard
              key={item.id}
              item={item}
              selectedItem={selectedItem}
            />
          );
        })}
    </div>
  );
};

export default CategoryItem;
