import React from "react";
import Desktops from "../components/Categories/GamingPc";

const DesktopPage = ({ onAddToCart }) => {
  return (
    <div>
      <Desktops onAddToCart={onAddToCart} />
    </div>
  );
};

export default DesktopPage;
