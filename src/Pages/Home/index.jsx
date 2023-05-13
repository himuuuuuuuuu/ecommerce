import React from "react";

import "./Home.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";

import Sidebar from "../../Component/Layout/Sidebar";
import PrimaryCard from "../../Component/Card/PrimaryCard";
import PrimaryCarousel from "../../Component/Carousel/PrimaryCarousel";
import SecondaryCarousel from "../../Component/Carousel/SecondaryCarousel";

function Home() {
  return (
    <PageContainer>
      <SectionContainer className="trending_section">
        <h1 className="trending_head">#TRENDING</h1>
        <PrimaryCarousel />
      </SectionContainer>
      <SectionContainer className="category_section">
        <h1 className="category_head">#BROWSE BY CATEGORY</h1>
        <SecondaryCarousel />
      </SectionContainer>
    </PageContainer>
  );
}

export default Home;
