import React from "react";
import { useNavigate } from "react-router-dom";

import "./UserProfile.css";
import { ActionButton } from "../../../../Component";
import { useAuth } from "../../../../Context/AuthContext";
import UserProfilePic from "../../../../Asset/User/UserProfileLogo.svg";

function UserProfile() {
  const { currentUser, logOutHandler } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutHandler();
    navigate("/login");
  };

  return (
    <div className="user">
      <div className="user_info">
        <img className="user_info_img" src={UserProfilePic} alt="user_pic" />

        <span className="user_info_text">
          {currentUser.firstName} {currentUser?.lastName}
        </span>

        <span className="user_info_text">{currentUser?.email}</span>
      </div>
      <ActionButton className="user_logout_btn" handleClick={handleLogOut}>
        LOG OUT
      </ActionButton>
    </div>
  );
}

export default UserProfile;
