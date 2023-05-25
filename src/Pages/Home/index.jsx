import React from "react";

import "./Home.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";

import PrimaryCarousel from "../../Component/Carousel/PrimaryCarousel";
import SecondaryCarousel from "../../Component/Carousel/SecondaryCarousel";
import {useData} from "../../Context/DataContext";

function Home() {
  const {state} = useData();
  
  const carouselData = [
    {
      id: 0,
      title: "Read Dead Redemption 2",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg",
    },
    {
      id: 1,
      title: "GTA: 3",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/grandtheftauto3.jpg",
    },
    {
      id: 2,
      title: "GTA: Vicecity",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/vicecity.jpg",
    },
    {
      id: 3,
      title: "Read Dead Redemption",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption.jpg",
    },

    {
      id: 4,
      title: "Max Payne",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/maxpayne.jpg",
    },
    {
      id: 5,
      title: "Max Payne 2",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/maxpayne2.jpg",
    },
    {
      id: 6,
      title: "Man Hunt 2",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/manhunt2.jpg",
    },
  ];

  return (
    <PageContainer>
      <SectionContainer className="trending_section">
        <h2 className="section_head trending_head">#TRENDING</h2>
        <PrimaryCarousel />
      </SectionContainer>
      <SectionContainer className="category_section">
        <h2 className="section_head category_head">#BROWSE BY CATEGORY</h2>
        <SecondaryCarousel carouselData={state.categoryList}/>
      </SectionContainer>
      <SectionContainer className="fame_section">
        <h2 className="section_head fame_head">#WALL OF FAME</h2>
        <div className="fame_body">
          {carouselData.map((current) => {
            return (
              <div
                key={current.id}
                className={`fame_item fame_item_${current.id}`}
              >
                <img src={current.thumbnail} alt="game_img" />
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default Home;
