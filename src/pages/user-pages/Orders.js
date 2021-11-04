import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import UserItemsList from "../../components/ui/UserItemsList";
import api from "../../service/api";

function Orders() {
  const [fetchedOrders, setFetchedOrders] = useState([]);
  const history = useHistory();

  const allOrders = () => {
    api
      .getCustomerOrders()
      .then((response) => {
        console.log(response);
        setFetchedOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  };

  console.log(fetchedOrders);

  useEffect(() => {
    allOrders();
  }, [history]);

  return (
    <UserLayout>
      <UserItemsList items={fetchedOrders} />
    </UserLayout>
  );
}

export default Orders;
