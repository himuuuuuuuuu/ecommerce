import React from "react";
import "./ActionButton.css";

function ActionButton(props) {
  const { children, className } = props;

  const classes = "action_button " + className;

  return <button className={classes}>{children}</button>;
}

export default ActionButton;
