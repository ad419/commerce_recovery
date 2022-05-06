import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import CatHoodies from "../Categorycard/CatHoodies";
import { SpinnerCircular } from "spinners-react";
import Grid from "@material-ui/core/Grid";
const Hoodies = ({ onAddToCart }) => {
  const [hoodies, setHoodies] = useState({});
  const categoryId = "cat_VKXmwDbAX5rgDA";

  const fetchHoodies = async () => {
    const result = await commerce.products.list({
      category_id: categoryId,
    });
    setHoodies(result.data);
  };

  useEffect(() => fetchHoodies(), []);

  if (!hoodies.length)
    return (
      <div className="flex justify-center items-center h-screen">
        <SpinnerCircular
          size="60px"
          thickness={100}
          speed={100}
          color="#36ad47"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );

  return (
    <Grid style={{ marginTop: "40px" }} container justify="center" spacing={4}>
      {hoodies.map((hoodie) => (
        <div key={hoodie.id}>
          <CatHoodies onAddToCart={onAddToCart} hoodie={hoodie} />
        </div>
      ))}
    </Grid>
  );
};

export default Hoodies;
