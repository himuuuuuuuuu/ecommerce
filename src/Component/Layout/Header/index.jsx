import React from "react";

import "./Header.css";
import Navbar from "../../Navbar";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";

function Header() {
  return (
    <header className="header">
      <img src={NavLogo} alt="nav_logo" className="header_img" />
      <Navbar />
    </header>
  );
}

export default Header;
