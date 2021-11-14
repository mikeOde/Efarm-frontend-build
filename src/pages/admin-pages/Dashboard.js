import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomersList from "../../components/admin-components/dashboard/CustomersList";
import PieChart from "../../components/admin-components/dashboard/PieChart";
import TotalCard from "../../components/admin-components/dashboard/TotalCard";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";
import api from "../../service/api";

function Dashboard() {
  //trees pie chart data
  const [fetchedTreesData, setFetchedTreesData] = useState([]);
  const history = useHistory();
  const treesTableHeader = [["Trees", "Adoptions"]];
  var treesResult = fetchedTreesData.map((currentTree) => {
    return [currentTree.name, Number(currentTree.total)];
  });
  const treesTableData = treesTableHeader.concat(treesResult);

  const treesChartData = () => {
    api
      .getTreesChart()
      .then((response) => {
        setFetchedTreesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    treesChartData();
  }, [history]);

  //trees total number of adoptions and total earnings
  const [fetchedTotalAdoptions, setFetchedTotalAdoptions] = useState([]);
  const totalAdoptionsNumber = fetchedTotalAdoptions.length;
  const totalAdoptionsEarnings = fetchedTotalAdoptions
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  const treesNumbersData = {
    title: "Total",
    total: totalAdoptionsNumber,
    subtitle: "Trees",
    body: "Total number of trees adopted",
  };
  const treesEarningsData = {
    title: "Total",
    total: totalAdoptionsEarnings,
    subtitle: "USD",
    body: "Total earnings of trees adopted",
  };

  const totalAdoptionsData = () => {
    api
      .getTotalAdoptions()
      .then((response) => {
        setFetchedTotalAdoptions(response.data);
      })
      // The routes are already protected
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    totalAdoptionsData();
  }, [history]);

  //vegetables pie chart data
  const [fetchedVegetablesData, setFetchedVegetablesData] = useState([]);
  const vegetablesTableHeader = [["Vegetables", "Orders"]];
  var vegetablesResult = fetchedVegetablesData.map((currentVegetable) => {
    return [currentVegetable.name, Number(currentVegetable.total)];
  });
  const vegetablesTableData = vegetablesTableHeader.concat(vegetablesResult);

  const vegetablesChartData = () => {
    api
      .getVegetablesChart()
      .then((response) => {
        setFetchedVegetablesData(response.data);
      })
      // The routes are already protected
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    vegetablesChartData();
  }, [history]);

  //vegetables total number of adoptions and total earnings
  const [fetchedTotalOrders, setFetchedTotalOrders] = useState([]);
  const totalOrdersNumber = fetchedTotalOrders.length;
  const totalOrdersEarnings = fetchedTotalOrders
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  const VegetablesNumbersData = {
    title: "Total",
    total: totalOrdersNumber,
    subtitle: "Boxes",
    body: "Total number of boxes ordered",
  };
  const VegetablesEarningsData = {
    title: "Total",
    total: totalOrdersEarnings,
    subtitle: "USD",
    body: "Total earnings of boxes ordered",
  };

  const totalOrdersData = () => {
    api
      .getTotalOrders()
      .then((response) => {
        setFetchedTotalOrders(response.data);
      })
      // The routes are already protected
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    totalOrdersData();
  }, [history]);

  //customers data
  const [fetchedCustomers, setFetchedCustomers] = useState([]);
  const allCustomers = () => {
    api
      .getCustomers()
      .then((response) => {
        setFetchedCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allCustomers();
  }, [history]);

  return (
    <AdminLayout>
      <Grid container spacing={3}>
        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Trees Statistics</Typography>
          </Grid>
          <TotalCard data={treesNumbersData} />
          <TotalCard data={treesEarningsData} />
          <PieChart data={treesTableData} title={"My trees adoptions"} />
        </Grid>

        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Vegetables Statistics</Typography>
          </Grid>
          <TotalCard data={VegetablesNumbersData} />
          <TotalCard data={VegetablesEarningsData} />
          <PieChart data={vegetablesTableData} title={"My vegetables orders"} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">Customers</Typography>
          <CustomersList customers={fetchedCustomers} />
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default Dashboard;
