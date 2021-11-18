import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

function TotalCard(props) {
  return (
    <Grid item xs={6}>
      <Card sx={{ paddingTop: 2 }} elevation={7}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            {props.data.title}
          </Typography>
          <Typography variant="h5" component="div" sx={{ color: "#72B750" }}>
            {props.data.total}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.data.subtitle}
          </Typography>
          <Typography variant="body2">{props.data.body}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default TotalCard;
