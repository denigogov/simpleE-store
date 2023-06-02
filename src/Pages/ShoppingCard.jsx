import deleteIcon from "../assets/deleteIcon.svg";

const ShoppingCard = ({ totalItems, apiData, setSelectedItem }) => {
  const handleDeleteItem = (item, i) => {
    const updateDeletedItems = totalItems.filter((item, index) => {
      return index !== i;
    });

    const result = confirm(`Please confirm deleting your item ?`);
    if (result) setSelectedItem(updateDeletedItems);
  };

  return (
    <div className="text-center  sm:flex sm:justify-center	  	">
      <div className="border sm:w-2/4 p-2  ">
        <h1>shopping Card</h1>
        {apiData
          .filter((item) => totalItems.includes(item.id))
          .map((item, i) => {
            console.log(item);
            return (
              <div
                className=" flex justify-between m-3 	 flex-col sm:flex-row items-center 	"
                key={i}
              >
                <img
                  className="w-17 sm:w-16 "
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex gap-10">
                  <p>{item.title}</p>
                  <p>€ {item.price}</p>
                  <img
                    onClick={() => handleDeleteItem(item, i)}
                    className="w-5 cursor-pointer "
                    src={deleteIcon}
                    alt="delete item icon"
                  />{" "}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ShoppingCard;
