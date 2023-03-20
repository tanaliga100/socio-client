import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { default as Login } from "../stateful/Login";
import Register from "../stateful/Register";
export default function Form() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Login />
      <Typography>
        Need an account ?
        <Button onClick={handleOpen} color="info" variant="text">
          {" "}
          Sign Up{" "}
        </Button>
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            component="h2"
            color="primary"
          >
            Sign Up Form
          </Typography>
          <Register setOpen={setOpen} />
        </Box>
      </Modal>
    </Box>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};
