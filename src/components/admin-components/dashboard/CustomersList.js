import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import EmailIcon from '@mui/icons-material/Email';
import Avatar from "@mui/material/Avatar";
import { Card } from "@mui/material";

function CustomersList(props) {
  console.log(props.customers);
  return (
    <Card sx={{ marginTop: "25px" }} elevation={7}>
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.customers.map((customer) => {
          const labelId = `checkbox-list-secondary-label-${customer.id}`;
          return (
            <ListItem
              key={customer.id}
              sx={{ minHeight: "50px" }}
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar sx={{backgroundColor: "#72B750"}}>{customer.first_name.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText id={labelId}>
                  {customer.first_name} {customer.last_name}
                </ListItemText>
                <ListItemText sx={{color: "#F2AB50", textDecoration: "underline"}} id={labelId}>
                  <EmailIcon sx={{marginRight: "10px"}}/>
                  {customer.email} 
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}

export default CustomersList;
