import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./SecondaryCarousel.css";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import { useData } from "../../../Context/DataContext";

function SecondaryCarousel(props) {
  const { dispatch } = useData();
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
        {props.carouselData.map((current) => {
          return (
            <Link
              key={current._id}
              className={`second_carousel_slide second_carousel_slide_${current._id}`}
              ref={carouselCardRef}
              to="/productList"
              onClick={() =>
                dispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: current.categoryName,
                })
              }
            >
              <img
                src={current.thumbnail}
                alt="carousel_img"
                className="secondary_carousel_img"
              />
              <div className="second_carousel_slide_label">
                <span>{current.categoryName}</span>
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
