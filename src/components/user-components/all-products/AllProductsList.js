import { Grid } from "@mui/material";
import React from "react";
import AllProductsCard from "./AllProductsCard";

function AllProductsList(props) {
  return (
    <Grid container spacing={3}>
      {props.products.map((product) => (
        <AllProductsCard
          key={product.id}
          id={product.id}
          image={product.image}
          description={product.description}
          subtitle={props.data.subtitle}
          avatar={props.data.avatar}
          button={props.data.buttonLabel}
          productType={props.data.isVegetable}
          price={product.price}
          quantity={product.quantity}
          name={product.name}
          farmName={product.farm_name}
        />
      ))}
    </Grid>
  );
}

export default AllProductsList;
