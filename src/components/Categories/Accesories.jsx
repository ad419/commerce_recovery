import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Grid from "@material-ui/core/Grid";
import { SpinnerCircularSplit } from "spinners-react";

import useStyles from "./styles";

import AccesorCard from "../Categorycard/AccesorCard";

const Accesories = ({ onAddToCart }) => {
  const [accesories, setAccesories] = useState({});
  const categoryId = "cat_gnZO5kZ06o7MNq";
  const classes = useStyles();
  const fetchAccesories = async () => {
    const result = await commerce.products.list({
      category_id: categoryId,
    });
    setAccesories(result.data);
  };

  useEffect(() => fetchAccesories(), []);

  if (!accesories.length)
    return (
      <center>
        <div className="flex text-center justify-center items-center h-screen">
          <SpinnerCircularSplit color="black" />
        </div>
      </center>
    );

  return (
    <>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {accesories.map((accesor) => (
          <div key={accesor.id}>
            <AccesorCard onAddToCart={onAddToCart} accesor={accesor} />
          </div>
        ))}
      </Grid>
    </>
  );
};

export default Accesories;
