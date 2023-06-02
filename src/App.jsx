import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { fetchAllProducts } from "./api";
import { useEffect, useState } from "react";
import ProductView from "./components/ProductCard";
import Root from "./components/Root";
import Home from "./Pages/Home";
import ShoppingCard from "./Pages/ShoppingCard";
const App = () => {
  const [apiData, setApiData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleSelectedItem = (item) => {
    const updateSelectedItem = [...selectedItem, item.id];
    setSelectedItem(updateSelectedItem);
  };

  useEffect(() => {
    const data = async () => {
      const res = await fetchAllProducts();
      setApiData(res);
    };
    data();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root totalItems={selectedItem} />}>
        <Route
          index
          element={<Home apiData={apiData} selectedItem={handleSelectedItem} />}
        />
        {/* <Route path="card" element={<ProductView />} /> */}
        <Route
          path="card"
          element={
            <ShoppingCard
              totalItems={selectedItem}
              apiData={apiData}
              setSelectedItem={setSelectedItem}
            />
          }
        />
      </Route>
    )
  );
  return (
    <div className="box-border m-0 p-0">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
