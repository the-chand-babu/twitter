import style from "./home.module.css";
import React from "react";
import Sidebar from "../../component/rightSideBar/RightSideBar";
import LeftSideBar from "../../component/leftSideBar/LeftSideBar";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.leftsidebar}>
        <LeftSideBar />
      </div>

      <div className={style.TweetContainer}>main tweets component involks</div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
