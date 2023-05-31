import React from "react";

function OrderSuccess() {
  const msgStyles = {
    color: "#1b4b33",
    margin: "10rem auto",
    textAlign: "center",
  };

  return (
    <div className="page-wrapper">
      <h1 style={msgStyles}>Order Placed Successfully! 🎉</h1>
    </div>
  );
}

export default OrderSuccess;
