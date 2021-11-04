import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, Grid } from "@mui/material";

function UserItemsList(props) {
  return (
    <Grid container sx={{ marginTop: "-25px" }}>
      {props.items.map((item) => (
        <Grid key={item.id} item xs={12}>
          <Card sx={{ display: "flex" }} elevation={7}>
            <CardMedia
              component="img"
              sx={{ width: "35%" }}
              image={item.image}
              alt="Live from space album cover"
            />
            <Box
              sx={{ width: "65%", display: "flex", flexDirection: "column" }}
            >
              <CardHeader
                sx={{ backgroundColor: "#ffffff" }}
                title={item.name}
                subheader={"$" + item.price}
                action={
                  <Avatar
                    sx={{ bgcolor: "#F2AB50", marginTop: "70%" }}
                    aria-label="recipe"
                  >
                    <Typography>{item.quantity}</Typography>
                  </Avatar>
                }
              ></CardHeader>
              <CardContent
                sx={{ flex: "1 0 auto", backgroundColor: "#ffffff" }}
              >
                <Typography
                  component="div"
                  style={{ color: "#516c66" }}
                  variant="h6"
                >
                  {item.farm_name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
      ;
    </Grid>
  );
}

export default UserItemsList;
