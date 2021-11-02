import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { generatePath, useHistory } from "react-router";


function FarmCard(props) {
  const history = useHistory();
  function renderFarm() {
    const farmId=props.id;
    // generatePath dynamically adds the id to the URL
    history.push(generatePath("/farm/:farmId",{farmId}));
  }
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card elevation={7}>
        <CardActionArea key={props.id} onClick={renderFarm}>
          <CardMedia component="img" image={props.image} alt={props.name} />
          <CardHeader
            title={props.name}
            subheader={props.owner}
            action={
              <Typography style={{ paddingTop: "34px" }}>Tannourine</Typography>
            }
          ></CardHeader>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default FarmCard;
