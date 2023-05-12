import React, { useState, useEffect } from "react";

import "./Carousel.css";
import { Circle } from "@mui/icons-material";
import ActionButton from "../Action/ActionButton";

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
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
  ];

  //   const [carouselList, setCarouselList] = useState();
  const maxSlide = carouselData.length - 1;

  const incrementSlide = () => {
    if (maxSlide === activeSlide) {
      return setActiveSlide(0);
    }
    setActiveSlide(activeSlide + 1);
  };

  console.log(activeSlide);

  const decrementSlide = () => {
    if (activeSlide === 0) {
      return setActiveSlide(maxSlide);
    }
    setActiveSlide(activeSlide - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      incrementSlide();
    }, 5000);
  }, [activeSlide]);

  return (
    <div className="primary_carousel">
      <div className="slider">
        {carouselData.map((currentSlide, index) => {
          return (
            <div
              className="slide"
              key={currentSlide.id}
              style={{
                transform: `translateX(${(index - activeSlide) * 100}%)`,
              }}
            >
              <img src={currentSlide.thumbnail} alt="" />
            </div>
          );
        })}

        <button className="btn btn-next" onClick={() => incrementSlide()}>
          +
        </button>
        <button className="btn btn-prev" onClick={() => decrementSlide()}>
          -
        </button>

        <div className="slider_action_wrap">
          {carouselData.map((current, index) => {
            return (
              <button
                className="slider_action"
                key={index}
                onClick={() => setActiveSlide(index)}
              >
                <Circle />
              </button>
            );
          })}
        </div>
      </div>
      <div className="primary_carousel_detail_wrap">
        {carouselData
          .filter((currentGame) => {
            return currentGame.id == activeSlide;
          })
          .map((current) => {
            return (
              <div className="primary_carousel_detail">
                <h2 className="primary_carousel_title">{current.title}</h2>
                <ActionButton>GET IT NOW!</ActionButton>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Carousel;
