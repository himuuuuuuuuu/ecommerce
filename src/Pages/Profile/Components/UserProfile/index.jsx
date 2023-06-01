import React from "react";
import { useNavigate } from "react-router-dom";

import "./UserProfile.css";
import { ActionButton } from "../../../../Component";
import { useAuth } from "../../../../Context/AuthContext";

function UserProfile() {
  const { currentUser, logOutHandler } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutHandler();
    navigate("/login");
  };

  return (
    <div className="user">
      <p className="user_item">
        <span className="user_item_key">Name:</span>
        <span className="user_item_value">
          {currentUser.firstName} {currentUser?.lastName}
        </span>
      </p>
      <p className="user_item">
        <span className="user_item_key">Email:</span>
        <span className="user_item_value">{currentUser?.email}</span>
      </p>
      <ActionButton className="user_logout_btn" handleClick={handleLogOut}>
        Log Out
      </ActionButton>
    </div>
  );
}

export default UserProfile;
