import React from "react";

import "./ProductDetail.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import ActionButton from "../../Component/Action/ActionButton";

function ProductDetail() {
  const starList = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
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
      <SectionContainer className="detail_section">
        <div className="detail_content">
          <div className="detail_content_intro">
            <h1 className="detail_content_intro_head">{gameList[0].title}</h1>
            <div className="detail_content_intro_body">
              <div className="detail_content_intro_thumbnail">
                <img src={gameList[0].thumbnail} alt={gameList[0].title} />
              </div>
              <div className="detail_content_intro_text">
                <p>{gameList[0].description}</p>
                <div className="detail_content_bread">
                  <div className="detail_content_bread_item">
                    <span>Rating</span>
                    <strong>
                      {starList.find((currentStar, index) => {
                        return index + 1 == gameList[0].rating;
                      })}
                    </strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>Genre</span>
                    <strong>{gameList[0].genre}</strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>ESRB</span>
                    <strong>{gameList[0].esrb}</strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>Downloads</span>
                    <strong>{gameList[0].downloads} Million</strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>Status</span>
                    <strong>{gameList[0].status}</strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>Age</span>
                    <strong>{gameList[0].age}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail_content_specs">
            <div className="detail_content_specs_column">
              <span className="detail_content_specs_column_head">Minimum</span>
              <div className="detail_content_specs_column_item">
                <span>PROCESSOR</span>
                <p>{gameList[0].requirement.minimum.cpu}</p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>HDD SPACE</span>
                <p>{gameList[0].requirement.minimum.storage} GB </p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>VIDEO CARD</span>
                <p>{gameList[0].requirement.minimum.gpu}</p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>MEMORY</span>
                <p>{gameList[0].requirement.minimum.memory} GB RAM</p>
              </div>
            </div>
            <div className="detail_content_specs_column">
              <span className="detail_content_specs_column_head">Maximum</span>
              <div className="detail_content_specs_column_item">
                <span>PROCESSOR</span>
                <p>{gameList[0].requirement.recommended.cpu}</p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>HDD SPACE</span>
                <p>{gameList[0].requirement.recommended.storage} GB </p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>VIDEO CARD</span>
                <p>{gameList[0].requirement.recommended.gpu}</p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>MEMORY</span>
                <p>{gameList[0].requirement.recommended.memory} GB RAM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="detail_action">
          <div className="detail_action_thumbnail">
            <img src={gameList[0].logo} alt={gameList[0].title} />
          </div>
          <span className="detail_action_price">{gameList[0].price}</span>
          <div className="detail_action_btn">
            <ActionButton>ADD TO CART</ActionButton>
            <ActionButton>ADD TO WISHLIST</ActionButton>
          </div>

          <div className="detail_action_meta">
            <div className="detail_action_meta_item">
              <span className="detail_action_meta_item_title">Developer</span>
              <span>{gameList[0].developer}</span>
            </div>
            <div className="detail_action_meta_item">
              <span className="detail_action_meta_item_title">Publisher</span>
              <span>{gameList[0].publisher}</span>
            </div>
            <div className="detail_action_meta_item">
              <span className="detail_action_meta_item_title">
                Release Date
              </span>
              <span>{gameList[0].release}</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProductDetail;
