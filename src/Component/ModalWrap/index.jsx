import * as React from "react";

import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ActionButton from "../Action/ActionButton";
import { Button } from "@mui/material";
import "./ModalWrap.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { actionIcon, children, bgColor } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ActionButton
        handleClick={handleOpen}
        style={{ backgroundColor: bgColor }}
      >
        {actionIcon}
      </ActionButton>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_content">
          <div className="modal_close">
            <ActionButton handleClick={handleClose} className="modal_close_btn">
              <CloseIcon />
            </ActionButton>
          </div>
          <div className="modal_body">{children}</div>
        </div>
      </Modal>
    </div>
  );
}
