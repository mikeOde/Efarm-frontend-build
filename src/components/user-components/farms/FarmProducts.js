import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import TreeCard from "../trees/TreeCard";
import VegetableCard from "../vegetables/VegetableCard";
import api from "../../../service/api";

//TabPanel configuration
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

//component function
function FarmProducts(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //obtaining farm trees
  const [fetchedTrees, setFetchedTrees] = useState([]);
  const history = useHistory();
  const treeData = {
    owner_id: props.farmId,
  };

  const allTrees = () => {
    api
      .getCustomerTrees(treeData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        setFetchedTrees(response.data);
      })
      .catch((error) => {
        history.push("/");
      });
  };

  useEffect(() => {
    allTrees();
  }, [history]);

  // //obtaining farm vegetables
  const [fetchedVegetables, setFetchedVegetables] = useState([]);
  const vegetableData = {
    owner_id: props.farmId,
  };

  const allVegetables = () => {
    api
      .getCustomerVegetables(vegetableData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        setFetchedVegetables(response.data);
      })
      .catch((error) => {
        history.push("/");
      });
  };

  useEffect(() => {
    allVegetables();
  }, [history]);

  return (
    <Box sx={{ bgcolor: "background.black", width: "100%" }}>
      <AppBar position="sticky">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tab"
        >
          <Tab label="Adopt Trees" {...a11yProps(0)} />
          <Tab label="Shop Vegetables" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container spacing={3}>
            {fetchedTrees.map((tree) => (
              <TreeCard
                key={tree.id}
                id={tree.id}
                image={tree.image}
                description={tree.description}
                price={tree.price}
                quantity={tree.quantity}
                name={tree.name}
              />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container spacing={3}>
            {fetchedVegetables.map((vegetable) => (
              <VegetableCard
                key={vegetable.id}
                id={vegetable.id}
                image={vegetable.image}
                description={vegetable.description}
                price={vegetable.price}
                quantity={vegetable.quantity}
                name={vegetable.name}
              />
            ))}
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default FarmProducts;
