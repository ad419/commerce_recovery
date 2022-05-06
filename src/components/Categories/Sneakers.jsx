import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import SneakersCard from "../Categorycard/SneakersCard";
import { SpinnerCircularSplit } from "spinners-react";
import Grid from "@material-ui/core/Grid";

const Sneakers = ({ onAddToCart }) => {
  const [sneakers, setSneakers] = useState({});
  const categoryId = "cat_8XO3wpAWxoYAzQ";

  const fetchSneakers = async () => {
    const { data } = await commerce.products.list({
      category_id: categoryId,
    });
    setSneakers(data);
  };

  useEffect(() => fetchSneakers(), []);

  if (!sneakers?.length)
    return (
      <center>
        <div className="flex text-center justify-center items-center h-screen">
          <SpinnerCircularSplit color="black" />
        </div>
      </center>
    );

  return (
    <Grid style={{ marginTop: "40px" }} container justify="center" spacing={4}>
      {sneakers.map((sneaker) => (
        <div key={sneaker.id}>
          <SneakersCard onAddToCart={onAddToCart} sneaker={sneaker} />
        </div>
      ))}
    </Grid>
  );
};

export default Sneakers;
