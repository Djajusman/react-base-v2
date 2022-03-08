import React from "react";
import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="h-16 w-full bg-red-700 flex items-center sticky top-0 z-50">
      <div className="topbar__left">
        <Link to="/" no-underline>
          <span className="text-lg m-4 font-bold text-white cursor-pointer">Diarium</span>
        </Link>
      </div>
      <div className="topbar__center">
        <div className="w-full h-10 bg-white rounded flex items-center">
          <Search className="text-base m-2" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="border-none w-3/4"
          />
        </div>
      </div>
      <div className="topbar__right flex text-white items-center justify-around">
        <div className="">
          <span className="mr-4 text-sm cursor-pointer">Homepage</span>
          <span className="mr-4 text-sm cursor-pointer">Timeline</span>
        </div>
        <div className="flex">
          <div className="mr-4 cursor-pointer relative">
            <Person />
            <span className="topbar__icon-badge">1</span>
          </div>
          <div className="mr-4 cursor-pointer relative">
            <Chat />
            <span className="topbar__icon-badge">1</span>
          </div>
          <div className="mr-4 cursor-pointer relative">
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
