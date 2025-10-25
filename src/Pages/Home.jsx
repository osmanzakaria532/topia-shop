import { useLoaderData } from "react-router";
import Gallery from "../Components/Gallery";
import PopularProducts from "../Components/PopularProducts";
import Slider from "../Components/Slider";

const Home = () => {
  const products = useLoaderData();
  // console.log(products);
  return (
    <>
      <Slider />
      <PopularProducts products={products} />
      <Gallery images={products} />
    </>
  );
};

export default Home;
