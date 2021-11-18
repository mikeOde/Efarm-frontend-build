import * as React from "react";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import classes from "./EditProfileForm.module.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import api from "../../../service/api";

function EditProfileForm(props) {
  const farmNameInputRef = useRef();
  const farmLocationInputRef = useRef();
  const farmPicInputRef = useRef();
  const farmDescriptionInputRef = useRef();
  const farmLatitudeInputRef = useRef();
  const farmLongitudeInputRef = useRef();

  function editProfileHandler(event) {
    event.preventDefault();

    const enteredFarmName = farmNameInputRef.current.value;
    const enterefFarmLocation = farmLocationInputRef.current.value;
    const enteredFarmPic = farmPicInputRef.current.value;
    const enteredFarmDescription = farmDescriptionInputRef.current.value;
    const enteredFarmLatitude = farmLatitudeInputRef.current.value;
    const enteredFarmLongitude = farmLongitudeInputRef.current.value;

    const editProfileData = {
      farm_name: enteredFarmName,
      location: enterefFarmLocation,
      image: enteredFarmPic,
      description: enteredFarmDescription,
      lat: enteredFarmLatitude,
      lng: enteredFarmLongitude,
    };

    api
      .editFarmerProfile(editProfileData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.status) {
          props.submitAction(); //profileData api call
          props.action(); //closes the Modal
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid data");
      });
  }

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={editProfileHandler}>
        <div className={classes.formTitle}>
          <h4>EDIT PROFILE</h4>
        </div>
        <div className={classes.closeAction}>
          <IconButton
            onClick={props.action}
            aria-label="close"
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              padding: "0px",
            }}
            color="error"
            size="small"
          >
            <CancelRoundedIcon
              fontSize="small"
              sx={{ width: "30px", height: "30px" }}
            />
          </IconButton>
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Farm Name</label>
          {/* htmlFor is the equival ent of for in regular html and it points to the id */}
          {/* of the input target */}
          <input
            type="text"
            required
            id="name"
            placeholder="Enter farm name"
            ref={farmNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="location">Farm Location</label>
          <input
            type="text"
            required
            id="location"
            placeholder="Enter farm location"
            ref={farmLocationInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="picture">Farm Picture</label>
          <input type="text" required id="picture" ref={farmPicInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            placeholder="Enter farm description"
            ref={farmDescriptionInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="lat">Latitude</label>
          <input
            type="text"
            required
            id="lat"
            placeholder="Enter farm latitude"
            ref={farmLatitudeInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="lng">Longitude</label>
          <input
            type="text"
            required
            id="lng"
            placeholder="Enter farm longitude"
            ref={farmLongitudeInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">EDIT PROFILE</button>
        </div>
      </form>
    </div>
  );
}
export default EditProfileForm;
