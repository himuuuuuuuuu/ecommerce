import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { useData } from "../../Context/DataContext";
import { Token } from "@mui/icons-material";
import { useAuth } from "../../Context/AuthContext";

function Navbar() {
  const { state } = useData();
  const { token } = useAuth();
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
            {state.cartList.length > 0 && token && (
              <span className="nav_label">{state.cartList.length}</span>
            )}
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/wishList" className="nav_link">
            Wish List
            {state.wishList.length > 0 && token && (
              <span className="nav_label">{state.wishList.length}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
