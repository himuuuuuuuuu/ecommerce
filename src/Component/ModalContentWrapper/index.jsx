import React from "react";
import "./ModalContentWrapper.css";

function ModalContentWrapper(props) {
  const { className, children } = props;
  const classes = "modal_content_wrapper " + className;
  return <div className={classes}>{children}</div>;
}

export default ModalContentWrapper;
