import React from "react";
import "./CartCard.css";
import ActionButton from "../../Action/ActionButton";
import { Add, Remove, Delete, Favorite } from "@mui/icons-material";

function CartCard(props) {
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
    thumbnail,
    logo,
  } = props;
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
            <ActionButton className="cart_card_counter_btn">
              <Remove />
            </ActionButton>
            <span className="cart_card_counter_btn_result">1</span>
            <ActionButton className="cart_card_counter_btn">
              <Add />
            </ActionButton>
          </div>
          <div className="cart_card_external">
            <ActionButton className="cart_card_remove_btn">
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
