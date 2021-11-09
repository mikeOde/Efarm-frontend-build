import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import FarmList from "../../components/user-components/farms/FarmList";
import api from "../../service/api";

function Home() {
  const [fetchedFarms, setFetchedFarms] = useState([]);
  const history = useHistory();

  const allFarms = () => {
    api
      .getCustomerFarms()
      .then((response) => {
        setFetchedFarms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allFarms();
  }, [history]);

  return (
    <UserLayout>
      <FarmList farms={fetchedFarms} />
    </UserLayout>
  );
}

export default Home;
