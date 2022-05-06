import React from "react";
import "../../../styles/_product_card.css";

const Product = ({ product, onAddToCart }) => {
  return (
    <>
      <div className="product_card">
        <div className="product_media">
          <a href={`/product-details/${product.id}`}>
            <img src={product?.image.url} alt="oke" />
          </a>
        </div>
        <div className="product_desc">
          <h3>{product?.name}</h3>
        </div>
        <div className="product_price">
          <h3>{product?.price.formatted_with_code}</h3>
        </div>
        <div className="product_button_section">
          <button
            onClick={() => onAddToCart(product.id, 1)}
            className="product_button product_button_slide"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
