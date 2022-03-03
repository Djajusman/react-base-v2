import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  VideoCameraBack,
  Group,
  Bookmark,
  QuestionAnswer,
  Event,
  WorkOutline,
  School,
} from "@mui/icons-material";
import { Users } from "utils/dummyData";
import Friend from "../friend/Friend";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <RssFeed className="sidebar__icon" />
            <span className="sidebar__list-item-text">Feed</span>
          </li>
          <li className="sidebar__list-item">
            <Chat className="sidebar__icon" />
            <span className="sidebar__list-item-text">Chats</span>
          </li>
          <li className="sidebar__list-item">
            <VideoCameraBack className="sidebar__icon" />
            <span className="sidebar__list-item-text">Videos</span>
          </li>
          <li className="sidebar__list-item">
            <Group className="sidebar__icon" />
            <span className="sidebar__list-item-text">Groups</span>
          </li>
          <li className="sidebar__list-item">
            <Bookmark className="sidebar__icon" />
            <span className="sidebar__list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar__list-item">
            <QuestionAnswer className="sidebar__icon" />
            <span className="sidebar__list-item-text">Questions</span>
          </li>
          <li className="sidebar__list-item">
            <WorkOutline className="sidebar__icon" />
            <span className="sidebar__list-item-text">Jobs</span>
          </li>
          <li className="sidebar__list-item">
            <Event className="sidebar__icon" />
            <span className="sidebar__list-item-text">Events</span>
          </li>
          <li className="sidebar__list-item">
            <School className="sidebar__icon" />
            <span className="sidebar__list-item-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar__button">Show More</button>
        <hr className="sidebar__hr"/>
        <ul className="sidebar__friendlist">
          {Users.map(u => (
            <Friend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
