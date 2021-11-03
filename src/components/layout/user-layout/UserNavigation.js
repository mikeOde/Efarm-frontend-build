import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./UserNavigation.module.css";
import { Button } from "@mui/material";
import navLogo from "../../images/navLogo.png";

function UserNavigation() {
  let userName = localStorage.getItem("user_name");
  const logoStyle = { maxHeight: "60px" };

  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="" className={classes.NavBrand}>
        <img src={navLogo} alt="logo" style={logoStyle} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className={classes.navList}>
              Home
            </Link>
            <Link to="/adoptions" className={classes.navList}>
              Adoptions
            </Link>
            <Link to="/orders" className={classes.navList}>
              Orders
            </Link>
          </Nav>
          <NavDropdown title={userName} id="basic-nav-dropdown">
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

export default UserNavigation;
