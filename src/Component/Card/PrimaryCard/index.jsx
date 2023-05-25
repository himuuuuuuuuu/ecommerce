import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./PrimaryCard.css";

import ActionButton from "../../Action/ActionButton";

import {
  ShoppingCart,
  Favorite,
  Delete,
  ArrowForward,
} from "@mui/icons-material";
import { PostCart } from "../../../Service/CartService";
import { useAuth } from "../../../Context/AuthContext";
import { useData } from "../../../Context/DataContext";
import { PostWish, DeleteWish } from "../../../Service/WishService";

function PrimaryCard(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useAuth();
  const { dispatch } = useData();

  const [isBtnCarted, setIsBtnCarted] = useState(false);
  const [isBtnWished, setIsBtnWished] = useState(false);

  const {
    _id,
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
    isWishList,
  } = props;

  const starList = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  const HandleAddCart = async () => {
    setIsBtnCarted(true);
    try {
      if (!token) {
        navigate("/login", { state: { from: location } });
        return;
      }
      const addCartResponse = await PostCart({
        product: { ...props, qty: 1 },
        encodedToken: token,
      });
      if (addCartResponse.status == 201) {
        dispatch({
          type: "GET_CART",
          payload: { cart: addCartResponse.data.cart },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleAddWish = async () => {
    setIsBtnWished(true);
    try {
      const addWishResponse = await PostWish({
        product: { ...props },
        encodedToken: token,
      });
      if (addWishResponse.status == 201) {
        dispatch({ type: "GET_WISH", payload: {wishlist: addWishResponse.data.wishlist} });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDeleteWish = async () => {
    setIsBtnWished(false);
    try {
      const deleteWishResponse = await DeleteWish({
        productId: _id,
        encodedToken: token,
      });
      if (deleteWishResponse.status == 200) {
        dispatch({
          type: "GET_WISH",
          payload: {wishlist: deleteWishResponse.data.wishlist},
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="primary_card">
      <img className="primary_card_img" src={thumbnail} alt={title} />
      <div className="primary_card_content">
        <div className="primary_card_actions">
          {isBtnCarted ? (
            <ActionButton
              className="primary_card_action"
              handleClick={() => {
                navigate("/cart");
              }}
            >
              <ArrowForward />
            </ActionButton>
          ) : (
            <ActionButton
              className="primary_card_action"
              handleClick={() => {
                HandleAddCart();
              }}
            >
              <ShoppingCart />
            </ActionButton>
          )}
          <ShoppingCart />

          {!isWishList && (isBtnWished ? 
            <ActionButton
              className="primary_card_action"
              handleClick={() => HandleDeleteWish()}
            >
              <Favorite style={{color: "red"}}/>
            </ActionButton>
            :
            <ActionButton
            className="primary_card_action"
            handleClick={() => HandleAddWish()}
          >
            <Favorite />
          </ActionButton>
          )}
          {isWishList && (
            <ActionButton
              className="primary_card_action"
              handleClick={() => HandleDeleteWish()}
            >
              <Delete />
            </ActionButton>
          )}
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
            <Link className="primary_card_view_btn" to={`/productList/${_id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PrimaryCard;
