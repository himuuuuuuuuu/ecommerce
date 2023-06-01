import React from "react";

import "./PageContainer.css";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

function PageContainer(props) {
  const { children } = props;
  return (
    <div className="page_container">
      <Main>{children}</Main>
    </div>
  );
}

export default PageContainer;
