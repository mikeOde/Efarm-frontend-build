import { Grid, Typography } from "@mui/material";
import PieChart from "../../components/admin-components/dashboard/PieChart";
import TotalCard from "../../components/admin-components/dashboard/TotalCard";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";

const treesNumbersData = {
  title: "Total",
  total: "198",
  subtitle: "Trees",
  body: "Total number of trees adopted",
};
const treesEarningsData = {
  title: "Total",
  total: "500",
  subtitle: "USD",
  body: "Total earnings of trees adopted",
};
const VegetablesNumbersData = {
  title: "Total",
  total: "95",
  subtitle: "Boxes",
  body: "Total number of boxes ordered",
};
const VegetablesEarningsData = {
  title: "Total",
  total: "245",
  subtitle: "USD",
  body: "Total earnings of boxes ordered",
};

const treesChartData = {
  chartData: [
    ["Trees", "Adoptions"],
    ["Apple", 23],
    ["Peach", 15],
    ["Cherry", 50],
    ["Olive", 35],
  ],
  title: "My trees adoptions",
};

const vegetablesChartData = {
  chartData: [
    ["Vegetables", "Boxes"],
    ["Tomato", 25],
    ["Cucumber", 45],
    ["Potato", 13],
    ["Onion", 7],
  ],
  title: "My vegetables adoptions",
};

function Dashboard() {
  return (
    <AdminLayout>
      <Grid container spacing={3}>
        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Trees Statistics</Typography>
          </Grid>
          <TotalCard data={treesNumbersData} />
          <TotalCard data={treesEarningsData} />
          <PieChart data={treesChartData} />
        </Grid>

        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Vegetables Statistics</Typography>
          </Grid>
          <TotalCard data={VegetablesNumbersData} />
          <TotalCard data={VegetablesEarningsData} />
          <PieChart data={vegetablesChartData} />
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default Dashboard;
