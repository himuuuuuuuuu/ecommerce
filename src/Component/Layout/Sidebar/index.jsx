import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {
  Inbox,
  InboxOutlined,
  Report,
  ReportGmailerrorred,
  Delete,
  DeleteOutlined,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar_list">
        <li className="sidebar_item">
          <NavLink to="/">
            {({ isActive }) => {
              return isActive ? (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <Inbox />
                    Inbox
                  </div>
                </div>
              ) : (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <InboxOutlined />
                    Inbox
                  </div>
                </div>
              );
            }}
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink to="/spam">
            {({ isActive }) => {
              return isActive ? (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <Report />
                    Spam
                  </div>
                </div>
              ) : (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <ReportGmailerrorred />
                    Spam
                  </div>
                </div>
              );
            }}
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink to="/trash">
            {({ isActive }) => {
              return isActive ? (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <Delete />
                    Trash
                  </div>
                </div>
              ) : (
                <div className="sidebar_content">
                  <div className="sidebar_icon">
                    <DeleteOutlined />
                    Trash
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
