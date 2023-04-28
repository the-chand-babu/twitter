import style from "./home.module.css";
import React from "react";
import RightSideBar from "../../component/rightSideBar/RightSideBar";



const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.leftsidebar}>sidebar... invoks</div>

      <div className={style.TweetContainer}>main tweets component involks</div>
      <div>
      <RightSideBar/>
      </div>
    </div>
  );
};

export default Home;
