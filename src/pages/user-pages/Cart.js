import React from "react";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../service/api";
import { Grid, Typography } from "@mui/material";
import CartItems from "../../components/user-components/cart/CartItems";
import CreditCard from "../../components/user-components/cart/CreditCard";

function Cart() {
  const [fetchedAdoptions, setFetchedAdoptions] = useState([]);
  const history = useHistory();
  //   const cardData = {
  //     subtitle: "Trees number",
  //     unit: "",
  //   };

  const allAdoptions = () => {
    api
      .getCustomerAdoptions()
      .then((response) => {
        console.log(response);
        setFetchedAdoptions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allAdoptions();
  }, [history]);

  const [fetchedOrders, setFetchedOrders] = useState([]);
  //   const cardData = {
  //     subtitle: "Box weight",
  //     unit: "kg",
  //   };

  const allOrders = () => {
    api
      .getCustomerOrders()
      .then((response) => {
        console.log(response);
        setFetchedOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allOrders();
  }, [history]);

  let fetchedCartItems = fetchedAdoptions.concat(fetchedOrders);
  console.log(fetchedCartItems);

  return (
    <UserLayout>
      <Grid container>
        <Typography variant="h5">Cart Items</Typography>
        <Grid item xs={12}>
          <CartItems items={fetchedCartItems} />
        </Grid>
        <Typography variant="h5" sx={{marginTop: "35px"}}>Checkout</Typography>
        <Grid item xs={12} sx={{marginTop: "-20px"}}>
          <CreditCard orderAction={setFetchedOrders} adoptionAction={setFetchedAdoptions}/>
        </Grid>
      </Grid>
    </UserLayout>
  );
}

export default Cart;
