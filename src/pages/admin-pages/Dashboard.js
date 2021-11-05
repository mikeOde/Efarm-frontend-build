import { Grid, Typography } from "@mui/material";
import PieChart from "../../components/admin-components/dashboard/PieChart";
import TotalCard from "../../components/admin-components/dashboard/TotalCard";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";

const treesNumbersData = {
  title: "Total adoptions number",
  total: "198",
  subtitle: "Trees",
  body: "Total number of trees adopted",
};
const treesEarningsData = {
  title: "Total adoptions earnings",
  total: "500",
  subtitle: "USD",
  body: "Total earnings of trees adopted",
};
const VegetablesNumbersData = {
  title: "Total orders",
  total: "95",
  subtitle: "Boxes",
  body: "Total number of boxes ordered",
};
const VegetablesEarningsData = {
  title: "Total orders earnings",
  total: "245",
  subtitle: "USD",
  body: "Total earnings of vegetables adopted",
};

const treesChartData = {
  chartData: [
    ["Trees", "Adoptions"],
    ["Apple Trees", 23],
    ["Peach Trees", 15],
    ["Cherry Trees", 50],
    ["Olive Trees", 35],
  ],
  title: "My trees adoptions",
};

const vegetablesChartData = {
  chartData: [
    ["Vegetables", "Boxes"],
    ["Tomato boxes", 25],
    ["Cucumber boxes", 45],
    ["Potato Boxes", 13],
    ["Onion Boxes", 7],
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
