import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import UserItemsList from "../../components/ui/UserItemsList";
import api from "../../service/api";

function Orders() {
  const [fetchedOrders, setFetchedOrders] = useState([]);
  const history = useHistory();
  const cardData = {
    subtitle: "Box weight",
    unit: "kg",
  };

  const allOrders = () => {
    api
      .getCustomerOrders()
      .then((response) => {
        setFetchedOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allOrders();
  }, [history]);

  return (
    <UserLayout>
      <UserItemsList items={fetchedOrders} data={cardData} />
    </UserLayout>
  );
}

export default Orders;
