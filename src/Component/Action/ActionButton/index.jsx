import React from "react";
import "./ActionButton.css";

function ActionButton(props) {
  const { children, className, handleClick, style: buttonStyle, btnType } = props;

  const classes =   className + " action_button";

  return (
    <button
      className={classes}
      onClick={handleClick}
      style={{ ...buttonStyle }}
      type={btnType}
    >
      {children}
    </button>
  );
}

export default ActionButton;
