import * as React from "react";
import { useRef, useState } from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import loginLogo from "./images/loginLogo.png";
import api from "../service/api";

function Signup() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [errors, setErrors] = useState([]);

  function signupHandler(event) {
    event.preventDefault();
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const signupData = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      user_type_id: value,
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(signupData);
    api
      .checkSignup(signupData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.status) {
          alert("Account is successfully created");
        }
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        if (enteredEmail === "" || enteredPassword === "") {
          setErrors(error.response.data.errors);
          console.log(errors);
        } else {
          alert("Email exists already");
        }
      });
  }

  const headerStyle = { marginTop: 10, color: "#72B750" };
  const paperStyle = {
    padding: 20,
    maxWidth: 380,
  };
  const logoStyle = { maxHeight: "100px", marginTop: "-25px" };
  const brandStyle = { color: "#516C66" };

  const [value, setValue] = React.useState("0");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Paper elevation={20} style={paperStyle}>
      <Grid align="center">
        <img src={loginLogo} alt="logo" style={logoStyle} />
        <h3 style={brandStyle}>Efarm</h3>
        <h2 style={headerStyle}>Sign Up</h2>
      </Grid>
      <form onSubmit={signupHandler}>
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          inputRef={firstNameInputRef}
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          inputRef={lastNameInputRef}
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <FormControl component="fieldset">
          <FormLabel
            color="success"
            component="legend"
            style={{ margin: "0px" }}
          >
            Register as:
          </FormLabel>
          <RadioGroup
            style={{ display: "initial" }}
            aria-label="user type"
            defaultValue="Customer"
            name="user-type"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="0"       // 0 for customers
              control={<Radio color="success" size="small" />}
              label="Customer"
            />
            <FormControlLabel
              value="1"       // 1 for farmers
              control={<Radio color="success" size="small" />}
              label="Farmer"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="Email"
          type="email"
          placeholder="Enter your email"
          inputRef={emailInputRef}
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="Password"
          type="password"
          placeholder="Create a password"
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
          Sign Up
        </Button>
      </form>
    </Paper>
  );
}

export default Signup;
