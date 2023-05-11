import React from "react";

import "./Main.css";

function Main(props) {
  const { children } = props;
  return <main className="main">{children}</main>;
}

export default Main;
