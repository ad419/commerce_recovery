import React from "react";
import demo from "../images/lol.jpg";
import "../../styles/_card.css";

const CategoryCard = ({ category }) => {
  return (
    <h1>
      {" "}
      <div className="category_card">
        <div className="category_card_heading">
          <h2>{category.name}</h2>
        </div>
        <div className="category_media">
          <img width="350px" src={category.assets[0]?.url} alt="oke" />
        </div>
        <div className="see_more">
          <a href="#">See more</a>
        </div>
      </div>
    </h1>
  );
};

export default CategoryCard;
