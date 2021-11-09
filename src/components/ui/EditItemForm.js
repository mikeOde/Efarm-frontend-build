import * as React from "react";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import classes from "./EditItemForm.module.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import api from "../../service/api";

function EditItemForm(props) {
  const vegetableApi = props.editData.isVegetable;
  const itemId = parseInt(props.itemId);
  const itemNameInputRef = useRef();
  const itemQuantityInputRef = useRef();
  const itemPriceInputRef = useRef();
  const itemDescriptionInputRef = useRef();

  console.log(props.editData);

  function editItemHandler(event) {
    event.preventDefault();

    const enteredItemName = itemNameInputRef.current.value;
    const enteredItemQuantity = itemQuantityInputRef.current.value;
    const enteredItemPrice = itemPriceInputRef.current.value;
    const enteredItemDescription = itemDescriptionInputRef.current.value;

    const editItemData = {
      id: itemId,
      name: enteredItemName,
      quantity: enteredItemQuantity,
      price: enteredItemPrice,
      description: enteredItemDescription,
    };
    
    if (vegetableApi === "1") {
      api
        .editVegetable(editItemData, {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            console.log(response);
            props.editAction(); //allVegetables api call
            props.action(); //closes the Modal
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Invalid data");
        });
    } else {
      api
        .editTree(editItemData, {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            props.editAction(); //allTrees api call
            props.action(); //closes the Modal
          }
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          alert("Invalid data");
          window.location.reload();
        });
    }
  }

  return (
    <div className={classes.formContainer} onSubmit={editItemHandler}>
      <form className={classes.form} >
        <div className={classes.formTitle}>
          <h4>EDIT {props.editData.title}</h4>
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
          <label htmlFor="name">{props.editData.nameLabel}</label>
          {/* htmlFor is the equival ent of for in regular html and it points to the id */}
          {/* of the input target */}
          <input
            type="text"
            required
            id="name"
            placeholder={props.editData.namePlaceHolder}
            ref={itemNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="location">{props.editData.quantityLabel}</label>
          <input
            type="number"
            required
            id="quantity"
            placeholder={props.editData.quantityPlaceHolder}
            ref={itemQuantityInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">{props.editData.priceLabel}</label>
          <input
            placeholder={props.editData.pricePlaceHolder}
            type="number"
            required
            id="price"
            ref={itemPriceInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">{props.editData.descriptionLabel}</label>
          <textarea
            id="description"
            required
            rows="5"
            placeholder={props.editData.descriptionPlaceHolder}
            ref={itemDescriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">EDIT {props.editData.buttonLabel}</button>
        </div>
      </form>
    </div>
  );
}
export default EditItemForm;
