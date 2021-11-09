import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import api from "../../../service/api";

function AllProductsCard(props) {
  const isVegetableApi = props.productType;

  function handleSubmit() {
    if (isVegetableApi === "0") {
      const treeAdoptionData = {
        tree_id: props.id,
      };

      api
      .adoptTree(treeAdoptionData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.status) {
          alert("Tree was successfully adopted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      const vegetableOrderData = {
        vegetable_id: props.id,
      };
  
      api
        .orderVegetable(vegetableOrderData, {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            alert("Vegetable was successfully ordered");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
  }
  

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card elevation={7}>
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt={props.farmName}
        />
        <CardHeader
          title={props.name}
          subheader={"$" + props.price}
          action={
            <div>
              <Typography variant="caption">Trees number</Typography>
              <Avatar sx={{ bgcolor: "#F2AB50" }} aria-label="recipe">
                <Typography>{props.quantity}{props.avatar}</Typography>
              </Avatar>
            </div>
          }
        ></CardHeader>
        <CardContent>
          <Typography component="div" style={{ color: "#516c66" }} variant="h6">
            {props.farmName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="success"
            variant="contained"
            disableRipple={false}
            size="medium"
            fullWidth={true}
            sx={{ bgcolor: "#72B750" }}
            onClick={handleSubmit}
          >
            {props.button}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default AllProductsCard;
