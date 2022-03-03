import React from "react";
import Rightbar from "components/SocialMedia/rightbar/Rightbar";
import Sidebar from "components/SocialMedia/sidebar/Sidebar";
import TopBar from "components/SocialMedia/topbar/Topbar";
import Feed from "components/SocialMedia/feed/Feed";
import "./home.css";

function Home() {
  return (
    <>
      <TopBar />
      <div className="home__container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
