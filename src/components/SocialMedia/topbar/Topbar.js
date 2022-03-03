import React from "react";
import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Diarium</span>
        </Link>
      </div>
      <div className="topbar__center">
        <div className="topbar__searchbar">
          <Search className="topbar__searchicon" />
          {/* <input
            type="text"
            placeholder="Search for friend, post or video"
            className="topbar__searchinput"
          /> */}
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__links">
          <span className="topbar__link">Homepage</span>
          <span className="topbar__link">Timeline</span>
        </div>
        <div className="topbar__icon">
          <div className="topbar__icon-item">
            <Person />
            <span className="topbar__icon-badge">1</span>
          </div>
          <div className="topbar__icon-item">
            <Chat />
            <span className="topbar__icon-badge">1</span>
          </div>
          <div className="topbar__icon-item">
            <Notifications />
            <span className="topbar__icon-badge">1</span>
          </div>
        </div>
        <img
          src={require("assets/img/team-2-800x800.jpg").default}
          alt="imagetopbar"
          className="topbar__image"
        />
      </div>
    </div>
  );
}

export default TopBar;
