import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import FarmProducts from "../../components/user-components/farms/FarmProducts";
import FarmProfile from "../../components/user-components/farms/FarmProfile";
import api from "../../service/api";

function Farm() {
  const [fetchedFarms, setFetchedFarms] = useState([]);
  const history = useHistory();

  //obtaining farms data
  const allFarms = () => {
    api
      .getCustomerFarms()
      .then((response) => {
        setFetchedFarms(response.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  };

  useEffect(() => {
    allFarms();
  }, [history]);

  //farm id is sent in the url onClick on a specific farm card
  let { farmId } = useParams();
  const id = parseInt(farmId);
  let farmData = [];

  //filtering the farms based on the id.
  for (let farm of fetchedFarms) {
    if (farm.id === id) {
      farmData = farm;
    }
  }

  return (
    <UserLayout>
      <FarmProfile data={farmData} />
      <FarmProducts farmId={id} />
    </UserLayout>
  );
}

export default Farm;
