import { Button } from "@mui/material";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./AdminNavigation.module.css";
import navLogo from "../../images/navLogo.png";

function AdminNavigation() {
  let userName = localStorage.getItem("user_name");
  const logoStyle = { maxHeight: "55px" };

  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="" className={classes.NavBrand}>
          <img src={navLogo} alt="logo" style={logoStyle} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/dashboard" className={classes.navList}>
              Dashboard
            </Link>
            <Link to="/vegetables" className={classes.navList}>
              Vegetables
            </Link>
            <Link to="/trees" className={classes.navList}>
              Trees
            </Link>
          </Nav>
          <NavDropdown title={userName} id="basic-nav-dropdown">
            <NavDropdown.Item
              as={Link}
              to="/profile"
              style={{ textAlign: "center" }}
            >
              Edit profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">
              <Button color="error" fullWidth={true} size="small">
                Logout
              </Button>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AdminNavigation;
