import React from "react";
import Grid from "@material-ui/core/Grid";
import { SpinnerCircularSplit } from "spinners-react";
import Product from "./Product/Product";
import useStyles from "./styles";
import "../../styles/_prods.css";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length)
    return (
      <div style={{ position: "absolute", right: "50%", marginTop: "3rem" }}>
        <SpinnerCircularSplit color="black" />
      </div>
    );

  return (
    <div style={{ width: "80%" }}>
      <main className={classes.content}>
        <div className="prod_heading">
          <h1>Search For Different Products</h1>
        </div>
        <div className={classes.toolbar} />

        <div className="grid">
          {products.map((product) => (
            <div key={product?.id}>
              <Product onAddToCart={onAddToCart} product={product} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
