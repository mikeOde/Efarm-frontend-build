import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Grid } from "@mui/material";
import EditItemButton from "./EditItemButton";
import api from "../../service/api";

function ItemCard(props) {
  function deleteHandler() {
    const itemId = parseInt(props.id);
    const deleteItemData = {
      id: itemId,
    };
    if (props.type === "1") {
      api
        .deleteVegetable(deleteItemData, {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            props.deleteAction(); //get items api call
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
            props.deleteAction();
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
            <div>
              <Typography variant="caption">{props.subtitle}</Typography>
              <Avatar sx={{ bgcolor: "#F2AB50" }} aria-label="recipe">
                <Typography>
                  {props.quantity}
                  {props.avatar}
                </Typography>
              </Avatar>
            </div>
          }
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <EditItemButton
            data={props.editForm}
            editItemId={props.id}
            action={props.editAction}
          />
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
