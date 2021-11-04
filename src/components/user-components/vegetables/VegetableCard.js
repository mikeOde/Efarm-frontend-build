import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Grid } from "@mui/material";
import api from "../../../service/api";

function VegetableCard(props) {

  function handleOrder() {
    const vegetableOrderData = {
      vegetable_id: props.id,
    };
    console.log(vegetableOrderData);

    api
      .orderVegetable(vegetableOrderData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.status) {
          console.log(response);
          alert("Vegetable was successfully ordered");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card elevation={7}>
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt={props.name}
        />
        <CardHeader
          title={props.name}
          subheader={props.price}
          action={
            <Avatar sx={{ bgcolor: "#F2AB50" }} aria-label="recipe">
              <Typography>{props.quantity}</Typography>
            </Avatar>
          }
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="success"
            variant="contained"
            size="medium"
            fullWidth={true}
            sx={{ bgcolor: "#72B750" }}
            onClick={handleOrder}
          >
            Order Box
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default VegetableCard;
