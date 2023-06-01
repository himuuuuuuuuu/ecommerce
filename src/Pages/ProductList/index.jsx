import React from "react";

import "./ProductList.css";
import {
  PageContainer,
  SectionContainer,
  Filter,
  PrimaryCard,
} from "../../Component";
import { useData } from "../../Context/DataContext";

function ProductList() {
  const { state, searchCheckedList } = useData();

  return (
    <PageContainer>
      <SectionContainer className="product_list">
        <Filter />
        <div className="product_list_content">
          <h3 className="product_list_content_head">Products</h3>
          <div className="product_list_content_body">
            {searchCheckedList.map((currentGame) => {
              return <PrimaryCard {...currentGame} key={currentGame.id} />;
            })}
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProductList;
