import * as React from "react";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import classes from "./AddItemForm.module.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import api from "../../service/api";

function AddItemForm(props) {
  const itemNameInputRef = useRef();
  const itemQuantityInputRef = useRef();
  const itemPriceInputRef = useRef();
  const itemDescriptionInputRef = useRef();
  const itemPicInputRef = useRef();
  const vegetableApi = props.itemData.isVegetable; // if it's equal to one, request is coming from the Vegetables.js component

  function addItemHandler(event) {
    event.preventDefault();

    const enteredItemName = itemNameInputRef.current.value;
    const enteredItemQuantity = itemQuantityInputRef.current.value;
    const enteredItemPrice = itemPriceInputRef.current.value;
    const enteredItemDescription = itemDescriptionInputRef.current.value;
    const enteredItemPic = itemPicInputRef.current.value;

    const addItemData = {
      name: enteredItemName,
      quantity: enteredItemQuantity,
      price: enteredItemPrice,
      description: enteredItemDescription,
      image: enteredItemPic,
    };

    if (vegetableApi === "1") {
      api
        .addVegetable(addItemData, {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            props.addAction(); //allVegetables api call
            props.closeAction(); //closes the Modal
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Invalid data");
        });
    } else {
      api
        .addTree(addItemData, {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            props.addAction(); //allTrees api call
            props.closeAction(); //closes the Modal
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Invalid data");
        });
    }
  }
  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={addItemHandler}>
        <div className={classes.formTitle}>
          <h4>ADD {props.itemData.title}</h4>
        </div>
        <div className={classes.closeAction}>
          <IconButton
            onClick={props.closeAction}
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
          <label htmlFor="name">{props.itemData.nameLabel}</label>
          {/* htmlFor is the equival ent of for in regular html and it points to the id */}
          {/* of the input target */}
          <input
            placeholder={props.itemData.namePlaceHolder}
            type="text"
            required
            id="name"
            ref={itemNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="quantity">{props.itemData.quantityLabel}</label>
          <input
            placeholder={props.itemData.quantityPlaceHolder}
            type="number"
            required
            id="quantity"
            ref={itemQuantityInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">{props.itemData.priceLabel}</label>
          <input
            placeholder={props.itemData.pricePlaceHolder}
            type="number"
            required
            id="price"
            ref={itemPriceInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="picture">{props.itemData.pictureLabel}</label>
          <input type="text" required id="picture" ref={itemPicInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">{props.itemData.descriptionLabel}</label>
          <textarea
            placeholder={props.itemData.descriptionPlaceHolder}
            id="description"
            required
            rows="5"
            ref={itemDescriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">ADD {props.itemData.buttonLabel}</button>
        </div>
      </form>
    </div>
  );
}
export default AddItemForm;
