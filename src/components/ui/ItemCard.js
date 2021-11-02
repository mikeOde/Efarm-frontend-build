import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Grid } from "@mui/material";

function ItemCard(props) {
  function deleteHandler() {
    console.log(props.type);
    console.log(parseInt(props.id));
    const itemId = parseInt(props.id);
    const deleteItemData = {
      id: itemId,
    };
    if (props.type === "1") {
      console.log("vegetable");
      api
        .deleteVegetable(deleteItemData, {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            window.location.reload();
            console.log(response);
          }
        });
    } else {
      api
        .deleteTree(deleteItemData, {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            window.location.reload();
            console.log(response);
          }
        });
    }
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
          subheader={"$" + props.price}
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
            size="medium"
            color="error"
            fullWidth={true}
            variant="contained"
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ItemCard;
