import React from "react";
import "./ActionButton.css";

function ActionButton(props) {
  const { children, className, handleClick, style: buttonStyle } = props;

  const classes = "action_button " + className;

  return (
    <button
      className={classes}
      onClick={handleClick}
      style={{ ...buttonStyle }}
    >
      {children}
    </button>
  );
}

export default ActionButton;
