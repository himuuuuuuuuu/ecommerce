import React from "react";

import "./Home.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";

import Sidebar from "../../Component/Layout/Sidebar";
import PrimaryCard from "../../Component/Card/PrimaryCard";
import Carousel from "../../Component/Carousel";

function Home() {
  return (
    <PageContainer>
      <SectionContainer className="trending_section">
        <h1 className="trending_head">#TRENDING</h1>

        <Carousel />
      </SectionContainer>
    </PageContainer>
  );
}

export default Home;
