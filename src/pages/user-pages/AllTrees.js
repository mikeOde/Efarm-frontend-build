import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import AllProductsList from "../../components/user-components/all-products/AllProductsList";
import api from "../../service/api";

function AllTrees() {
  const [fetchedTrees, setFetchedTrees] = useState([]);
  const history = useHistory();
  const cardData = {
    subtitle: "Trees number",
    avatar: "",
    buttonLabel: "ADOPT TREE",
    isVegetable: "0", //used to differentiate between handleAdoption or handleOrder
  };

  const getTrees = () => {
    api
      .getAllTrees()
      .then((response) => {
        console.log(response);
        setFetchedTrees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTrees();
  }, [history]);

  return (
    <UserLayout>
      <AllProductsList products={fetchedTrees} data={cardData} />
    </UserLayout>
  );
}

export default AllTrees;
