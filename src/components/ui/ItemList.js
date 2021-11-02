import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";



function ItemList(props) {
  return (
    <Grid container spacing={3}>
      {props.items.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          image={item.image}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          name={item.name}
        />
      ))}
    </Grid>
  );
}

export default ItemList;
