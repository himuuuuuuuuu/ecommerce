import React from "react";

import "./SectionContainer.css";

function SectionContainer(props) {
  const { children, className } = props;

  const classes = "section_container " + className;

  return <section className={classes}>{children}</section>;
}

export default SectionContainer;
