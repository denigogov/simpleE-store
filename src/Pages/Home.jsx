import Header from "../components/Header";
import ProductsView from "../components/ProductsView";

const Home = ({ apiData, selectedItem }) => {
  return (
    <div>
      <Header />
      <ProductsView apiData={apiData} selectedItem={selectedItem} />
    </div>
  );
};

export default Home;
