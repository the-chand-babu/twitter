
import style from "./home.module.css";
import React from "react";
import Sidebar from "../../component/rightSideBar/RightSideBar";
import LeftSideBar from "../../component/leftSideBar/LeftSideBar";

import LiveTweet from "../../component/liveTweet/LiveTweet";
import style from "./home.module.css";
import React from "react";



const Home = () => {
  return (
    <div className={style.homeContainer}>
<<<<<<< HEAD
      <div className={style.leftsidebar}>
        <LeftSideBar />
      </div>
=======

      <div className={style.leftsidebar}>sidebar... invoks</div>
>>>>>>> 57edfaf86a5cd2cf593c5ddf47943754bb9ffdd1

      <div className={style.TweetContainer}>main tweets component involks</div>
      <div>
        <Sidebar />
      </div>

      <div className={style.sidebar}>sidebar... invoks</div>

      <div className={style.mainContainer}>
        <LiveTweet />
       
      </div>
      <div>whats new and search bar here...</div>

    </div>
  );
};

export default Home;
