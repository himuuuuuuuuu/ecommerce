import React from "react";
import "./ActionButton.css";

function ActionButton(props) {
  const { children, className, handleClick } = props;

  const classes = "action_button " + className;

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}

export default ActionButton;
