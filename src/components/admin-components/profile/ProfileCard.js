import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import EditProfileButton from "./EditProfileButton";

function ProfileCard(props) {
  return (
    <Grid item xs={12}>
      <Card elevation={7}>
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt={props.farm_name}
        />
        <CardHeader
          title={props.farm_name}
          subheader={props.owner}
          action={
            <Typography style={{ paddingTop: "34px", paddingRight: "15px" }}>
              {props.location}
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <EditProfileButton editAction={props.getFunction} />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProfileCard;
