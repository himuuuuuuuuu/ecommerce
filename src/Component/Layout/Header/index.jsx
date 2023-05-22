import React, { useState } from "react";
import { createPortal } from "react-dom";

import "./Header.css";
import Navbar from "../../Navbar";
import Sidebar from "../Sidebar";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import { Menu } from "@mui/icons-material";
import ActionButton from "../../Action/ActionButton";
import { Login } from "@mui/icons-material";
import ModalWrap from "../../ModalWrap";
import SignUpForm from "../../Form/SignUpForm";
import LogInForm from "../../Form/LogInForm";

function Header() {
  const [isSideActive, setIsSideActive] = useState(false);
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
          <ModalWrap actionIcon={<Login />}>
            <SignUpForm />
          </ModalWrap>
          <ModalWrap actionIcon={<Login />}>
            <LogInForm />
          </ModalWrap>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Signout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
