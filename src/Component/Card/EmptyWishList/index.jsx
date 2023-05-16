import React from "react";

import "./EmptyWishList.css";
import ActionLink from "../../Action/ActionLink/index";

function EmptyWishList() {
  return (
    <div className="empty_wish">
      <div className="empty_wish_head">
        <h3 className="empty_wish_title">Your cart is empty!</h3>
        <p className="empty_wish_description">Add items to it now.</p>
      </div>
      <ActionLink reach="/productList">Shop for Games & Apps</ActionLink>
    </div>
  );
}

export default EmptyWishList;
