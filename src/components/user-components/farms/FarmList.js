import { Grid } from "@mui/material";
import React from "react";
import FarmCard from "./FarmCard";

function FarmList(props) {
  return (
    <Grid container spacing={3}>
      {props.farms.map((farm) => (
        <FarmCard
          key={farm.id}
          id={farm.id}
          image={farm.image}
          description={farm.description}
          farm_name={farm.farm_name}
          location={farm.location}
          owner={farm.first_name + " " + farm.last_name}
        />
      ))}
    </Grid>
  );
}

export default FarmList;
