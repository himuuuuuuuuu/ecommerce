import React from "react";

import "./ProductList.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import Filter from "../../Component/Filter";
import PrimaryCard from "../../Component/Card/PrimaryCard";

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
      title: "Grand Theft Auto V",
      rating: "5",
      price: "₹2,321",
      genre: "Adventure",
      developer: "Rockstar Games",
      publisher: "Rockstar Games",
      release: "05/14/20",
      downloads: "175",
      esrb: "R",
      status: "online",
      age: "18+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "90",
          cpu: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs)",
          gpu: "NVIDIA 9800 GT 1GB",
          os: "Windows 10 64 Bit",
        },
        recommended: {
          memory: "8",
          storage: "90",
          cpu: "Intel Core i5 3470 @ 3.2GHZ (4 CPUs)",
          gpu: "NVIDIA GTX 660 2GB",
          os: "Windows 10 64 Bit",
        },
      },
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/GTAOnline.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
    },
  ];
  return (
    <PageContainer>
      <SectionContainer className="product_list">
        <Filter />
        <div className="product_list_content">
          <h3 className="product_list_content_head">Products</h3>
          <div className="product_list_content_body">
            {gameList.map((currentGame) => {
              return <PrimaryCard {...currentGame} key={currentGame.id} />;
            })}
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProductList;
