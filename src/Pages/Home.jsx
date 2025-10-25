import React from "react";
import Slider from "../Components/Slider";
import PopularProducts from "../Components/PopularProducts";
import { useLoaderData } from "react-router";

const Home = () => {
  const products = useLoaderData();
  // console.log(products);
  return (
    <>
      <Slider />
      <PopularProducts products={products} />
    </>
  );
};

export default Home;
