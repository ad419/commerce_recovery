import React from "react";
import Laptops from "../components/Categories/Laptops";

const LaptopPage = ({ onAddToCart }) => {
  return (
    <div>
      <Laptops onAddToCart={onAddToCart} />
    </div>
  );
};

export default LaptopPage;
