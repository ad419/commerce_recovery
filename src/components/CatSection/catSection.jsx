import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import CategoryCard from "./CategoryCard";
import "../../styles/_categories.css";

const CatSection = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await commerce.categories.list();
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <center>
        <div className="warp">
          <div className="categories_heading">
            <h1>Shop By categories</h1>
          </div>
          <div className="grid">
            {categories.map((category) => (
              <div key={category?.id}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </center>
    </>
  );
};

export default CatSection;
