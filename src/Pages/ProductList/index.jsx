import React from "react";

import "./ProductList.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import Filter from "../../Component/Filter";

function ProductList() {
  const gameList = [
    // {
    //   id: "0",
    //   title: "",
    //   rating: "",
    //   price: "",
    //   genre: "",
    //   requirement: {
    //     minimum: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
    //     recommended: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
    //   },
    //   imageList: [],
    //   thumbnail: "",
    // },
    {
      id: "0",
      title: "",
      rating: "",
      price: "",
      genre: "",
      requirement: {
        minimum: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
        recommended: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
      },
      imageList: [],
      thumbnail: "",
    },
  ];
  return (
    <PageContainer>
      <SectionContainer className="product_list">
        <Filter />
        <div className="product_list_content">
          <h3 className="product_list_content_head">Products</h3>
          <div className="product_list_content_body"></div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProductList;
