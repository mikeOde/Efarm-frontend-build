import * as React from "react";
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
          <Typography component={'div'}>{children}</Typography>
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
function FarmProducts(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const trees = [
    {
      id: "1",
      name: "Apple trees",
      image:
        "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/apple-tree.jpg",
      price: "$25",
      description:
        "These Apple trees are raised outdoors and fed organic fertilizers only",
      quantity: "24",
    },
    {
      id: "2",
      name: "Cherry trees",
      image:
        "https://gardenerspath.com/wp-content/uploads/2019/07/How-to-Grow-and-Care-for-Fruiting-Cherry-Trees-Cover.jpg",
      price: "$27",
      description:
        "National Cherry trees outdoor drown on 1500m elevation with minimum pesticides",
      quantity: "13",
    },
    {
      id: "3",
      name: "Peach trees",
      image:
        "https://www.garden.eco/wp-content/uploads/2018/06/how-to-grow-a-peach-tree.jpg",
      price: "$25",
      description: "Medium sized potatoes, with no additional fertilizers",
      quantity: "37",
    },
    {
      id: "4",
      name: "Olive trees",
      image: "https://www.trees.com/wp-content/uploads/2019/11/olive-tree.jpg",
      price: "$12",
      description: "Round reddish onions that are fertilizer fed",
      quantity: "70",
    },
  ];

  const vegetables = [
    {
      id: "1",
      name: "Cucumbers",
      image:
        "https://cdn.plantssparkjoy.com/wp-content/uploads/2021/09/02071046/growing-cucumbers-with-plants-spark-joy.jpeg",
      price: "$12",
      description:
        "These Cucumbers are raised outdoors and fed organic fertilizers only",
      quantity: "5kg",
    },
    {
      id: "2",
      name: "Tomatoes",
      image:
        "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
      price: "$15",
      description:
        "National tomatoes outdoor drown on 1500m elevation with minimum pesticides",
      quantity: "4kg",
    },
    {
      id: "3",
      name: "Potatoes",
      image:
        "https://www.vanmeuwen.com/static-images/master/static-images/how-to-grow-potatoes/how-to-plant-grow-potatoes.jpg",
      price: "$10",
      description: "Medium sized potatoes, with no additional fertilizers",
      quantity: "10kg",
    },
    {
      id: "4",
      name: "Onions",
      image:
        "https://jainsusa.com/wp-content/uploads/2015/02/5tips_to_grow_great_onions.jpg",
      price: "$12",
      description: "Round reddish onions that are fertilizer fed",
      quantity: "7kg",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.black", width: "100%",}}>
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
            {trees.map((tree) => (
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
            {vegetables.map((vegetable) => (
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
