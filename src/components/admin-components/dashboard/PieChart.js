import { Card, Grid } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";


function PieChart(props) {
    let chartData = props.data;
    const chartTitle = {title: props.title};
    console.log(chartData);
  return (
    <Grid item xs={12}>
      <Card elevation={7}>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={chartTitle}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    </Grid>
  );
}

export default PieChart;
