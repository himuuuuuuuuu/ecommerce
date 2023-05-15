import React from "react";

import "./ProductList.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import Filter from "../../Component/Filter";

function ProductList() {
  return (
    <PageContainer>
      <SectionContainer className="product_list">
        <Filter />
        <div className="productList"></div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProductList;
