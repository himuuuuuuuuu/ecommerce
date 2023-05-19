import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import "./Header.css";
import Navbar from "../../Navbar";
import Sidebar from "../Sidebar";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import { Menu } from "@mui/icons-material";
import ActionButton from "../../Action/ActionButton";
import { Login } from "@mui/icons-material";
import { Modal } from "@mui/material";
import ModalWrap from "../../ModalWrap";
import TextField from "@mui/material/TextField";
import ActionLink from "../../Action/ActionLink";

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
            <div className="sign_up_form_wrap">
              <div className="form_head">
                <img src={NavLogo} alt="nav_logo" />
                <h2>Sign Up</h2>
              </div>
              <form className="sign_up_form">
                <input name="firstName" placeholder="First Name" type="text" />
                <input name="lastName" placeholder="Last Name" type="text" />
                <input
                  name="displayName"
                  placeholder="Display Name"
                  type="text"
                />
                <input name="countryName" placeholder="Country" type="text" />
                <input name="email" placeholder="Email" type="email" />
                <input name="password" placeholder="Password" type="password" />
                <ActionButton className="sign_up_btn">Sign Up</ActionButton>
              </form>
              <div className="sign_up_meta">
                <p className="is_sign_in">
                  Have an Account? <Link>Sign in</Link>
                </p>
                <ActionLink>Back to Store</ActionLink>
              </div>
            </div>
          </ModalWrap>
          <ModalWrap actionIcon={<Login />}>
            <div className="sign_in_form_wrap">
              <div className="form_head">
                <img src={NavLogo} alt="nav_logo" />
                <h2>Sign In</h2>
              </div>
              <form className="sign_in_form">
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <label className="sign_in_remember">
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </label>
                <ActionButton>Sign In</ActionButton>
              </form>
              <div className="sign_up_meta">
                <p className="is_forget">
                  Forgot your password? <Link>Reset</Link>
                </p>
                <p className="is_sign_up">
                  Don't have an Account? <Link>Sign Up</Link>
                </p>
                <ActionLink>Back to Store</ActionLink>
              </div>
            </div>
          </ModalWrap>
        </div>
      </div>
    </header>
  );
}

export default Header;
