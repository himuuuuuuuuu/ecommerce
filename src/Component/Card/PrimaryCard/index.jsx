import React from "react";
import { Link } from "react-router-dom";

import "./PrimaryCard.css";

import ActionButton from "../../Action/ActionButton";

import { ShoppingCart, Favorite } from "@mui/icons-material";

function PrimaryCard(props) {
  const {
    id,
    title,
    rating,
    price,
    genre,
    developer,
    publisher,
    release,
    downloads,
    esrb,
    status,
    age,
    requirement,
    recommended,
    thumbnail,
    logo,
    description,
  } = props;

  const starList = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  return (
    <article className="primary_card">
      <img className="primary_card_img" src={thumbnail} alt={title} />
      <div className="primary_card_content">
        <div className="primary_card_actions">
          <ActionButton className="primary_card_action">
            <ShoppingCart />
          </ActionButton>
          <ActionButton className="primary_card_action">
            <Favorite />
          </ActionButton>
        </div>
        <div className="primary_card_text">
          <h3 className="primary_card_title">{title}</h3>
          <div className="primary_card_tags">
            <p className="primary_card_tag">
              <strong>Price:</strong>
              <span>{price}</span>
            </p>
            <p className="primary_card_tag">
              <strong>ESRB:</strong>
              <span>{esrb}</span>
            </p>
            <p className="primary_card_tag">
              <strong>Genre:</strong>
              <span>{genre}</span>
            </p>
            <p className="primary_card_tag">
              <strong>Age:</strong>
              <span>{age}</span>
            </p>
            <p className="primary_card_tag">
              <strong>Rating:</strong>
              <span>
                {starList.find((currentStar, index) => {
                  return index + 1 == rating;
                })}
              </span>
            </p>
          </div>
          <div className="primary_card_view">
            <Link className="primary_card_view_btn" to={`/productList/${id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PrimaryCard;
