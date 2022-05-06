import React from "react";

import Products from "../Products/Products";

const BestSeller = ({ products, onAddToCart }) => {
  if (!products) {
    return "loading";
  }

  return (
    <div>
      <center>
        <Products products={products} onAddToCart={onAddToCart} />
      </center>
    </div>
  );
};

export default BestSeller;
