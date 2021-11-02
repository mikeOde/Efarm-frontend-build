import * as React from "react";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Paper, TextField, Button } from "@mui/material";
import loginLogo from "./images/loginLogo.png";
import api from "../service/api";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  function loginHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(loginData);
    api
      .checkLogin(loginData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.user.user_type_id === 1) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("user_type", response.data.user.user_type_id);
          history.push("/dashboard");
          window.location.reload();
        } else {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("user_type", response.data.user.user_type_id);
          history.push("/home");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        if (enteredEmail === "" || enteredPassword === "") {
          setErrors(error.response.data.errors);
          console.log(errors);
        } else {
          alert("incorrect email or password");
        }
      });
  }

  const headerStyle = { marginTop: 10, color: "#72B750" };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    maxWidth: 380,
  };
  const logoStyle = { maxHeight: "100px", marginTop: "-25px" };
  const brandStyle = { color: "#516C66" };

  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center">
        <img src={loginLogo} alt="logo" style={logoStyle} />
        <h3 style={brandStyle}>Efarm</h3>
        <h2 style={headerStyle}>Sign in</h2>
      </Grid>
      <form onSubmit={loginHandler}>
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="Email"
          type="email"
          placeholder="Enter email address"
          inputRef={emailInputRef}
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <TextField
          sx={{ paddingBottom: "15px" }}
          label="Password"
          type="password"
          placeholder="Enter password"
          inputRef={passwordInputRef}
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <Button
          color="success"
          sx={{ backgroundColor: "#72b750", margin: "10px 0px" }}
          variant="contained"
          type="submit"
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </Paper>
  );
}

export default Login;
