import * as React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { IconButton } from "@mui/material";

function AddToggler() {
  return (
    <IconButton aria-label="Add" color="success" size="large">
      <AddCircleRoundedIcon fontSize="large" />
    </IconButton>
  );
}

export default AddToggler;
