import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {
  Home,
  HomeOutlined,
  Report,
  ReportGmailerrorred,
  ShoppingCart,
  ShoppingCartOutlined,
  FeaturedPlayListOutlined,
  FeaturedPlayList,
  Close,
} from "@mui/icons-material";
import ActionButton from "../../Action/ActionButton";

function Sidebar(props) {
  return (
    <nav
      className={
        props.isActive ? "sidebar sidebar_active" : "sidebar sidebar_deactivate"
      }
    >
      <div className="sidebar_btn_wrap">
        <ActionButton
          className="sidebar_close_btn"
          handleClick={() => props.handleClose(false)}
        >
          <Close />
        </ActionButton>
      </div>
      <ul className="sidebar_list">
        <li className="sidebar_item">
          <NavLink to="/">
            {({ isActive }) => {
              return isActive ? (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <Home />
                    Home
                  </div>
                </div>
              ) : (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <HomeOutlined />
                    Home
                  </div>
                </div>
              );
            }}
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink to="/store">
            {({ isActive }) => {
              return isActive ? (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <Report />
                    Store
                  </div>
                </div>
              ) : (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <ReportGmailerrorred />
                    Store
                  </div>
                </div>
              );
            }}
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink to="/cart">
            {({ isActive }) => {
              return isActive ? (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <ShoppingCart />
                    Cart
                  </div>
                </div>
              ) : (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <ShoppingCartOutlined />
                    Cart
                  </div>
                </div>
              );
            }}
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink to="/wishList">
            {({ isActive }) => {
              return isActive ? (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <FeaturedPlayList />
                    WishList
                  </div>
                </div>
              ) : (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <FeaturedPlayListOutlined />
                    WishList
                  </div>
                </div>
              );
            }}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
