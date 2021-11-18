import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import AllProductsList from "../../components/user-components/all-products/AllProductsList";
import api from "../../service/api";

function AllVegetables() {
  const [fetchedVegetables, setFetchedVegetables] = useState([]);
  const history = useHistory();
  const cardData = {
    subtitle: "Box weight",
    avatar: "kg",
    buttonLabel: "ORDER BOX",
    isVegetable: "1", //used to differentiate between handleAdoption or handleOrder
  };

  const getVegetables = () => {
    api
      .getAllVegetables()
      .then((response) => {
        setFetchedVegetables(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getVegetables();
  }, [history]);

  return (
    <UserLayout>
      <AllProductsList products={fetchedVegetables} data={cardData} />
    </UserLayout>
  );
}

export default AllVegetables;
