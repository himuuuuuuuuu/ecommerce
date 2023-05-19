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
        "https://media.contentapi.ea.com/content/dam/gin/images/2019/01/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg",
    },
    {
      id: 1,
      title: "Anime",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/03/lost-castle-game-art-16x9.jpg.adapt.crop1x1.767p.jpg",
    },
    {
      id: 2,
      title: "Racing",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/nfs-rivals-key-art.jpg.adapt.crop1x1.767p.jpg",
    },
    {
      id: 3,
      title: "Horror",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2019/06/sos-section-keyart-xl.jpg.adapt.crop1x1.767p.jpg",
    },

    {
      id: 4,
      title: "Sports",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
    },
    {
      id: 5,
      title: "Adventure",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/06/star-wars-jedi-survivor-keyart.jpg.adapt.crop1x1.767p.jpg",
    },
    {
      id: 6,
      title: "Strategy",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/star-wars-galaxy-of-heroes-key-art.jpg.adapt.crop1x1.767p.jpg",
    },
    {
      id: 7,
      title: "Open World",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-3-pets-keyart.jpg.adapt.crop1x1.767p.jpg",
    },
    {
      id: 8,
      title: "survival",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2020/06/rocket-arena-keyart-16x9.jpg.adapt.crop1x1.767p.jpg",
    },
    {
      id: 9,
      title: "Simulation",
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg",
    },
  ];

  const carouselRef = useRef();
  const carouselCardRef = useRef();
  const arrowClick = (arrowType) => {
    let cardWidth;
    if (window.innerWidth > 780) {
      cardWidth = carouselCardRef.current.clientWidth + 16;
    } else {
      cardWidth = carouselCardRef.current.clientWidth;
    }

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
