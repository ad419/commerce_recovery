import React from "react";
import CatSection from "../components/CatSection/catSection";
import Banner from "../components/Banner/Banner";
import BestSeller from "../components/BestSeller/BestSeller";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";

const Home = ({ products, onAddToCart }) => {
  return (
    <>
      <Banner />
      <BestSeller products={products} onAddToCart={onAddToCart} />
      <center>
        <p className="text-4xl lg:text-5xl font-semibold leading-9 text-center text-gray-800">
          Best Seller Products
        </p>
      </center>

      <Featured />
      <CatSection />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
