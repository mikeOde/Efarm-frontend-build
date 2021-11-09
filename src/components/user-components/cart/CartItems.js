import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Card, Typography } from "@mui/material";

function CartItems(props) {
  const total = props.items.reduce(function (sum, current) {
    return sum + current.price;
  }, 0);
  console.log(total);

  return (
    <Card sx={{ marginTop: "8px" }} elevation={7}>
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.items.map((item) => {
          const labelId = `checkbox-list-secondary-label-${item.id}`;
          return (
            <ListItem key={item.name} sx={{ minHeight: "50px" }} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#72B750" }}>
                    {item.name.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText id={labelId} sx={{ width: "30%" }}>
                  {item.name}
                </ListItemText>
                <ListItemText id={labelId} sx={{ width: "30%" }}>
                  {item.farm_name}
                </ListItemText>
                <ListItemText
                  sx={{ color: "#F2AB50", width: "30%" }}
                  id={labelId}
                >
                  ${item.price}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <List dense sx={{ width: "100%", bgcolor: "#f2ab50" }}>
        <ListItemButton>
          <ListItemText id="total" sx={{ width: "30%", textAlign: "center" }}>
          <Typography>
            Total
            </Typography>
          </ListItemText>
          <ListItemText id="price" sx={{ width: "30%", textAlign: "center" }}>
            <Typography>
            ${total}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </List>
    </Card>
  );
}

export default CartItems;
