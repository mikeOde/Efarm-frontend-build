import { Grid } from "@mui/material";
import UserNavigation from "./UserNavigation";
import { Container } from "react-bootstrap";

function UserLayout(props) {
  return (
    <section>
      <UserNavigation />
      <Grid container style={{padding: "0px"}}>
        <Container>{props.children}</Container>
      </Grid>
    </section>
  );
}

export default UserLayout;