import { Grid } from "@mui/material";
import AdminNavigation from "./AdminNavigation";
import { Container } from "react-bootstrap";

function AdminLayout(props) {
  return (
    <section className="layout-section">
      <AdminNavigation />
      <Grid container>
        <Container>{props.children}</Container>
      </Grid>
    </section>
  );
}

export default AdminLayout;
