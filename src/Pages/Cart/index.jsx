import React from "react";

import "./Cart.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import EmptyCart from "../../Component/Card/EmptyCart";
import CartCard from "../../Component/Card/CartCard";
import ActionButton from "../../Component/Action/ActionButton";
import { useAuth } from "../../Context/AuthContext";
import { useData } from "../../Context/DataContext";

function Cart() {
  const { token } = useAuth();
  const { state } = useData();
  return (
    <PageContainer>
      <SectionContainer className="cart_section">
        <h1 className="cart_section_head">MY CART</h1>
        {state.cartList.length == 0 ? (
          <EmptyCart />
        ) : (
          <div className="cart_section_body">
            {/* CART PRICE */}
            <div className="cart_price">
              <h2 className="cart_price_title">Price Details</h2>
              <div className="cart_price_body">
                <p className="cart_price_body_item">
                  <span className="cart_price_body_item_key">Price</span>
                  <span className="cart_price_body_item_value">₹8,499</span>
                </p>
                <p className="cart_price_body_item">
                  <span className="cart_price_body_item_key">Discount</span>
                  <span className="cart_price_body_item_value">− ₹6,500</span>
                </p>
                <p className="cart_price_body_item">
                  <span className="cart_price_body_item_key">
                    Delivery Charges
                  </span>
                  <span className="cart_price_body_item_value">Free</span>
                </p>
              </div>
              <div className="cart_price_footer">
                <p className="cart_price_footer_wrap">
                  <span className="cart_price_footer_key">Total Amount</span>
                  <span className="cart_price_footer_value">₹1,999</span>
                </p>
              </div>
              <div className="cart_price_action">
                <ActionButton>CHECKOUT</ActionButton>
              </div>
            </div>
            {/* <EmptyCart /> */}
            <div className="cart_wrap">
              <div className="cart_list">
                {state.cartList.map((currentGame) => {
                  return <CartCard {...currentGame} key={currentGame.id} />;
                })}
              </div>
            </div>
          </div>
        )}
      </SectionContainer>
    </PageContainer>
  );
}

export default Cart;
