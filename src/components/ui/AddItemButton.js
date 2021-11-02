import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AddItemForm from "./AddItemForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: "800px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function AddItemButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        sx={{
          color: "#72B750",
          position: "fixed",
          bottom: "10%",
          right: "10%",
        }}
        aria-label="Add"
        color="success"
        size="large"
        onClick={handleOpen}
      >
        <AddCircleRoundedIcon
          sx={{ width: "2.2em", height: "2.2em" }}
          fontSize="large"
        />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddItemForm itemData={props.data} closeAction={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
export default AddItemButton;
