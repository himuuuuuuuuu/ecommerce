import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="nav_item">
          <NavLink to="/" className="nav_link">
            Home
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/productList" className="nav_link">
            Store
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/cart" className="nav_link">
            Cart
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/wishList" className="nav_link">
            Wish List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
