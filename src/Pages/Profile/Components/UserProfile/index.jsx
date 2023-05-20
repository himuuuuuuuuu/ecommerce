import React from "react";

import "./UserProfile.css";
import ActionButton from "../../../../Component/Action/ActionButton";
function UserProfile() {
  return (
    <div className="user">
      <p className="user_item">
        <span className="user_item_key">Name:</span>
        <span className="user_item_value">Vivek Bhatt</span>
      </p>
      <p className="user_item">
        <span className="user_item_key">Email:</span>
        <span className="user_item_value">vivekbhatt618@gmail.com</span>
      </p>
      <ActionButton className="user_logout_btn">Log Out</ActionButton>
    </div>
  );
}

export default UserProfile;
