import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./CartCard.css";
import ActionButton from "../../Action/ActionButton";
import { Add, Remove, Delete, Favorite } from "@mui/icons-material";
import { PostCart, DeleteCart, UpdateCart } from "../../../Service/CartService";
import { useAuth } from "../../../Context/AuthContext";
import { useData } from "../../../Context/DataContext";
import { PostWish, DeleteWish } from "../../../Service/WishService";



function CartCard(props) {
  const { token } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const location = useLocation();
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


  const HandleAddWish = async () => {
    try {
      if (!token) {
        navigate("/login", { state: { from: location } });
      }
      const addWishResponse = await PostWish({
        product: { ...props },
        encodedToken: token,
      });
      if (addWishResponse.status == 201) {
        dispatch({
          type: "GET_WISH",
          payload: { wishlist: addWishResponse.data.wishlist },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDeleteWish = async () => {
    try {
      if (!token) {
        navigate("/login", { state: { from: location } });
      }
      const deleteWishResponse = await DeleteWish({
        productId: _id,
        encodedToken: token,
      });
      if (deleteWishResponse.status == 200) {
        dispatch({
          type: "GET_WISH",
          payload: { wishlist: deleteWishResponse.data.wishlist },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isWished = state.wishList.findIndex((currentProduct) => {
    return currentProduct._id == _id;
  });

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
            <span className="cart_card_body_item_value">₹{price}</span>
          </p>
          <p className="cart_card_body_item">
            <span className="cart_card_body_item_key">Subtotal</span>
            <span className="cart_card_body_item_value">₹{qty * price}</span>
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
            {isWished !== -1 ? (
              <ActionButton className="cart_card_wish_btn" handleClick={HandleDeleteWish}>
                <Favorite sx={{color: "red"}}/>
              </ActionButton>
            ) : (
              <ActionButton className="cart_card_wish_btn" handleClick={HandleAddWish}>
                <Favorite />
              </ActionButton>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartCard;
