import React from "react";
import Sneakers from "../components/Categories/Sneakers";

const SneakersPage = ({ onAddToCart }) => {
  return (
    <div>
      <Sneakers onAddToCart={onAddToCart} />
    </div>
  );
};

export default SneakersPage;
