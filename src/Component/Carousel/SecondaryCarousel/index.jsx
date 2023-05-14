import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./SecondaryCarousel.css";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";

function SecondaryCarousel() {
  const carouselData = [
    {
      id: 0,
      title: "Action",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg",
    },
    {
      id: 1,
      title: "Anime",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/grandtheftauto3.jpg",
    },
    {
      id: 2,
      title: "Racing",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/vicecity.jpg",
    },
    {
      id: 3,
      title: "Horror",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption.jpg",
    },

    {
      id: 4,
      title: "Sports",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/maxpayne.jpg",
    },
    {
      id: 5,
      title: "Adventure",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/maxpayne2.jpg",
    },
    {
      id: 6,
      title: "Strategy",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/maxpayne3.jpg",
    },
    {
      id: 7,
      title: "Open World",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/bully.jpg",
    },
    {
      id: 8,
      title: "survival",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/thewarriors.jpg",
    },
    {
      id: 9,
      title: "Simulation",
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/manhunt2.jpg",
    },
  ];

  const carouselRef = useRef();
  const carouselCardRef = useRef();
  const arrowClick = (arrowType) => {
    const cardWidth = carouselCardRef.current.clientWidth + 16;

    if (arrowType === "left") {
      carouselRef.current.scrollLeft -= cardWidth;
    } else {
      carouselRef.current.scrollLeft += cardWidth;
    }
  };
  return (
    <div className="second_carousel_wrap">
      <button
        className="second_carousel_btn second_carousel_prev"
        onClick={() => arrowClick("left")}
      >
        <KeyboardArrowLeft />
      </button>
      <div className="second_carousel" ref={carouselRef}>
        {carouselData.map((current) => {
          return (
            <Link
              key={current.id}
              className={`second_carousel_slide second_carousel_slide_${current.id}`}
              ref={carouselCardRef}
            >
              <img
                src={current.thumbnail}
                alt="carousel_img"
                className="secondary_carousel_img"
              />
              <div className="second_carousel_slide_label">
                <span>{current.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <button
        className="second_carousel_btn second_carousel_next"
        onClick={arrowClick}
      >
        <KeyboardArrowRight />
      </button>
    </div>
  );
}

export default SecondaryCarousel;
