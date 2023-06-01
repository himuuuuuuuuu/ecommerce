import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { Menu, AccountCircle } from "@mui/icons-material";

import "./Header.css";
import Navbar from "../../Navbar";
import Sidebar from "../Sidebar";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import ActionButton from "../../Action/ActionButton";
import ActionIcon from "../../Action/ActionIcon";
import { useAuth } from "../../../Context/AuthContext";
import SearchIcon from "@mui/icons-material/Search";
import { useData } from "../../../Context/DataContext";

import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

function Header() {
  const [open, setOpen] = React.useState(false);
  const [searchInputText, setSearchInputText] = useState("");
  const navigate = useNavigate();
  const { token, logOutHandler } = useAuth();
  const { state, dispatch } = useData();

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
            className="header_action_hamburger"
            handleClick={() => setIsSideActive(true)}
          >
            <Menu />
          </ActionButton>
          <h1>
            <Link to="/">
              <img src={NavLogo} alt="nav_logo" className="header_img" />
            </Link>
          </h1>
          <Navbar />
          {createPortal(
            <Sidebar isActive={isSideActive} handleClose={setIsSideActive} />,
            document.body
          )}
        </div>
        <div className="header_input_wrap">
          <div className="search_wrap">
            <input
              className="search_input"
              type="search"
              value={searchInputText}
              placeholder="Explore..."
              onChange={(event) => {
                setSearchInputText(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  dispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: searchInputText,
                  });
                  navigate("/productList");
                }
              }}
            />
            <ActionIcon
              handleClick={() => {
                if (searchInputText) {
                  dispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: searchInputText,
                  });
                  navigate("/productList");
                } else {
                }
              }}
            >
              <SearchIcon />
            </ActionIcon>
          </div>
        </div>
        <div className="header_account_actions">
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
            <ActionIcon handleClick={() => navigate("/profile")}>
              <AccountCircle />
            </ActionIcon>
          )}
          {token && (
            <ActionButton
              handleClick={() => handleLogout()}
              className="header_account_action"
            >
              Log Out
            </ActionButton>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
