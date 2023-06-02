const ProductCard = ({ item, selectedItem }) => {
  const handleItem = (item) => {
    selectedItem(item);
  };

  const handlePopUp = (item) => {
    console.log(item);
  };

  return (
    <div className="w-30 md:w-50 lg:w-70">
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-20">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 	">
            <div className="group relative " onClick={() => handlePopUp(item)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 text-subTitlePrimaryLight  ">
                <img src={item.image} alt="product image" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <p>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {item.title}
                    </p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    rating: {item.rating.rate}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${item.price}
                </p>
              </div>
            </div>{" "}
            <button onClick={() => handleItem(item)} className="btn ">
              add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
