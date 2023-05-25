import React from "react";
import "./CartCard.css";
import ActionButton from "../../Action/ActionButton";
import { Add, Remove, Delete, Favorite } from "@mui/icons-material";
import { PostCart, DeleteCart, UpdateCart } from "../../../Service/CartService";
import { useAuth } from "../../../Context/AuthContext";
import { useData } from "../../../Context/DataContext";

function CartCard(props) {
  const { token } = useAuth();
  const { dispatch } = useData();
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
    thumbnail,
    logo,
    qty,
  } = props;

  // DELETE CART:

  const HandleDeleteCart = async () => {
    try {
      const deleteCartResponse = await DeleteCart({
        productId: _id,
        encodedToken: token,
      });
      console.log(deleteCartResponse);
      if (deleteCartResponse.status == 200) {
        dispatch({
          type: "GET_CART",
          payload: { cart: deleteCartResponse.data.cart },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // CART INCREMENT:

  const HandleCartIncrement = async () => {
    try {
      const incrementResponse = await UpdateCart({
        productId: _id,
        encodedToken: token,
        type: "increment",
      });
      console.log(incrementResponse);
      if (incrementResponse.status == 200) {
        dispatch({
          type: "GET_CART",
          payload: { cart: incrementResponse.data.cart },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // CART DECREMENT:

  const HandleCartDecrement = async () => {
    if (qty <= 1) {
      HandleDeleteCart();
      return;
    }
    try {
      const incrementResponse = await UpdateCart({
        productId: _id,
        encodedToken: token,
        type: "decrement",
      });
      if (incrementResponse.status == 200) {
        dispatch({
          type: "GET_CART",
          payload: { cart: incrementResponse.data.cart },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="cart_card">
      <div className="cart_card_img">
        <img src={thumbnail} />
      </div>
      <div className="cart_card_body">
        <h3 className="cart_card_title">{title}</h3>
        <div className="cart_card_text">
          <p className="cart_card_body_item">
            <span className="cart_card_body_item_key">Price</span>
            <span className="cart_card_body_item_value">{price}</span>
          </p>
          <p className="cart_card_body_item">
            <span className="cart_card_body_item_key">Subtotal</span>
            <span className="cart_card_body_item_value">{price}</span>
          </p>
        </div>
        <div className="cart_card_actions">
          <div className="cart_card_internal">
            <ActionButton
              className="cart_card_counter_btn"
              handleClick={() => {
                HandleCartDecrement();
              }}
            >
              <Remove />
            </ActionButton>
            <span className="cart_card_counter_btn_result">{qty}</span>
            <ActionButton
              className="cart_card_counter_btn"
              handleClick={() => {
                HandleCartIncrement();
              }}
            >
              <Add />
            </ActionButton>
          </div>
          <div className="cart_card_external">
            <ActionButton
              className="cart_card_remove_btn"
              handleClick={() => {
                HandleDeleteCart();
              }}
            >
              <Delete />
            </ActionButton>
            <ActionButton className="cart_card_wish_btn">
              <Favorite />
            </ActionButton>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartCard;
