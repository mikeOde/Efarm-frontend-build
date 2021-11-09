import React from "react";
import "./style.css";
import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from "reactjs-credit-card/form";
import Card from "reactjs-credit-card/card";
import { useCardForm } from "reactjs-credit-card";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Card as MuiCard } from "@mui/material";

function CreditCard(props) {
  const getFormData = useCardForm();
  const [numberValid, setNumberValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const [data, isValid] = getFormData();

    console.log(data, isValid); //log all form data and verification results

    if (!data.number.isValid) setNumberValid(false); //we'll set a hook to show a error if card number is invalid
    //check the general verification result and alert with special verification result
    if (!isValid)
      alert(
        `${data.holder.value} form data values invalid :) and holder also ${
          data.holder.isValid ? "valid" : "invalid"
        }`
      );
    props.orderAction([]);
    props.adoptionAction([]);
  }

  //remove error function if focused on CardNumber
  function handleFocus() {
    setNumberValid(true);
  }

  return (
    <Grid container>
      <Grid item>
        <MuiCard elevation={7} sx={{ marginRight: "2rem", maxWidth: "500px" }}>
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <CardNumber
                placeholder="Card Number"
                className={`input-text${!numberValid ? " error" : ""}`}
                onFocus={handleFocus}
              />
              <CardHolder placeholder="Card Holder" className="input-text" />
              <div className="flex-wrapper">
                <div className="semi flex-wrapper">
                  <ValidThruMonth className="input-text semi" />
                  <ValidThruYear className="input-text semi" />
                </div>
                <CardSecurityCode
                  placeholder="CVV"
                  className="input-text semi"
                />
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
        </MuiCard>
      </Grid>
      <Grid item>
        <Card fixClass="fix-new" cardClass="card-new" />
      </Grid>
    </Grid>
  );
}

export default CreditCard;
