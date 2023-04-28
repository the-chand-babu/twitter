import style from "./home.module.css";
import React from "react";
import RightSideBar from "../../component/rightSideBar/RightSideBar";
import LiveTweet from "../../component/liveTweet/LiveTweet";
import Leftsidebar from "../../component/leftSideBar/LeftSideBar";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div>
        <Leftsidebar />
      </div>
      <div className={style.mainContainer}>
        <LiveTweet />
      </div>
      <div>
        {" "}
        <RightSideBar />.
      </div>
    </div>
  );
};

export default Home;
