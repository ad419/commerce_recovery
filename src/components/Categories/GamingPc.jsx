import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Grid from "@material-ui/core/Grid";
import { SpinnerCircularSplit } from "spinners-react";
import DeskCard from "../Categorycard/DeskCard";
import useStyles from "./styles";

const Desktops = ({ onAddToCart }) => {
  const [desktops, setDesktops] = useState({});
  const categoryId = "cat_eN1ql9xnp5z3ym";

  const fetchDesktops = async () => {
    const result = await commerce.products.list({
      category_id: categoryId,
    });
    setDesktops(result.data);
  };

  useEffect(() => fetchDesktops(), []);

  if (!desktops.length)
    return (
      <center>
        <div className="flex text-center justify-center items-center h-screen">
          <SpinnerCircularSplit color="black" />
        </div>
      </center>
    );

  return (
    <Grid style={{ marginTop: "40px" }} container justify="center" spacing={4}>
      {desktops.map((desktop) => (
        <div key={desktop.id}>
          <DeskCard onAddToCart={onAddToCart} desktop={desktop} />
        </div>
      ))}
    </Grid>
  );
};

export default Desktops;
