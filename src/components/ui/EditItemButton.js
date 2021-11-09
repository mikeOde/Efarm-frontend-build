import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import EditItemForm from "./EditItemForm";

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

function EditItemButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{width: "100%", marginRight: 10}}>
      <Button
        aria-label="edit"
        size="medium"
        color="success"
        fullWidth={true}
        variant="contained"
        onClick={handleOpen}
      >
        Edit
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditItemForm
            action={handleClose}
            submitAction={props.editAction}
            editData={props.data}
            itemId={props.editItemId}
            editAction={props.action}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default EditItemButton;
