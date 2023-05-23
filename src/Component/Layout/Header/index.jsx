import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

import "./Header.css";
import Navbar from "../../Navbar";
import Sidebar from "../Sidebar";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import { Menu, AccountCircle } from "@mui/icons-material";
import ActionButton from "../../Action/ActionButton";

function Header() {
  const navigate = useNavigate();
  const { token, logOutHandler } = useAuth();

  const [isSideActive, setIsSideActive] = useState(false);

  const handleLogout = () => {
    logOutHandler();
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="header_wrap">
        <div className="header_primary">
          <ActionButton
            className="header_hamburger"
            handleClick={() => setIsSideActive(true)}
          >
            <Menu />
          </ActionButton>
          <img src={NavLogo} alt="nav_logo" className="header_img" />
          <Navbar />
          {createPortal(
            <Sidebar isActive={isSideActive} handleClose={setIsSideActive} />,
            document.body
          )}
        </div>
        <div className="nav_btns">
          {!token && (
            <ActionButton handleClick={() => navigate("/signup")}>
              Sign Up
            </ActionButton>
          )}
          {!token && (
            <ActionButton handleClick={() => navigate("/login")}>
              Log In
            </ActionButton>
          )}
          {token && (
            <ActionButton handleClick={() => navigate("/profile")}>
              <AccountCircle />
            </ActionButton>
          )}
          {token && (
            <ActionButton handleClick={() => handleLogout()}>
              Log Out
            </ActionButton>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
