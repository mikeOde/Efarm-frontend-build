import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Grid } from "@mui/material";

function TreeCard(props) {
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
            disableRipple={false}
            size="medium"
            fullWidth={true}
            sx={{ bgcolor: "#72B750" }}
          >
            Adopt Tree
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default TreeCard;
