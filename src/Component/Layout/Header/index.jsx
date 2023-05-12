import React, { useState } from "react";
import { createPortal } from "react-dom";

import "./Header.css";
import Navbar from "../../Navbar";
import Sidebar from "../Sidebar";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import { Menu } from "@mui/icons-material";
import ActionButton from "../../Action/ActionButton";

function Header() {
  const [isSideActive, setIsSideActive] = useState(false);
  return (
    <header className="header">
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
    </header>
  );
}

export default Header;
