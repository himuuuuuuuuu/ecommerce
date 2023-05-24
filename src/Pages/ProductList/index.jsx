import React from "react";

import "./ProductList.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import Filter from "../../Component/Filter";
import PrimaryCard from "../../Component/Card/PrimaryCard";
import { useData } from "../../Context/DataContext";


function ProductList() {
  const { state, sortCheckedList } = useData();

  return (
    <PageContainer>
      <SectionContainer className="product_list">
        <Filter />
        <div className="product_list_content">
          <h3 className="product_list_content_head">Products</h3>
          <div className="product_list_content_body">
            {sortCheckedList.map((currentGame) => {
              return <PrimaryCard {...currentGame} key={currentGame.id} />;
            })}
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProductList;
