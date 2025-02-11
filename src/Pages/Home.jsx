import "@fontsource/josefin-sans/700.css";
import Banner from "../Components/Banner/Banner";
import Product from "../Components/Product-compenent/Products";
import Posts from "../Components/Posts/Post";
import TrioProduct from "../Components/TrioProduct/TrioProduct";
import AboutCosaluxe from "../Components/AboutCosaluxe";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutCosaluxe />
      <TrioProduct />
      <Product />
      <Posts />
    </>
  );
};

export default Home;
