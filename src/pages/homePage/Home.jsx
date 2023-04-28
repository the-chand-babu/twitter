
import style from "./home.module.css";
import React from "react";
import RightSideBar from "../../component/rightSideBar/RightSideBar";



import LiveTweet from "../../component/liveTweet/LiveTweet";
import style from "./home.module.css";
import React from "react";



const Home = () => {
  return (
    <div className={style.homeContainer}>

      <div className={style.leftsidebar}>sidebar... invoks</div>

      <div className={style.TweetContainer}>main tweets component involks</div>
      <div>
      <RightSideBar/>
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
