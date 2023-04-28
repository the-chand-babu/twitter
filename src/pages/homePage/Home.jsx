import style from "./home.module.css";
import React from "react";
import Search from "../../component/rightSideBar/searchbar/SearchBar";
import TrendingBar from "../../component/rightSideBar/whatsHappeningBar/TrendingBar";
import Righthomebox2 from "../../component/rightSideBar/whoToFollowBar/WhoToFollow";


const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.leftsidebar}>sidebar... invoks</div>

      <div className={style.TweetContainer}>main tweets component involks</div>
      <div>
        <Search />     
        <TrendingBar/> 
        <Righthomebox2 />
      </div>
    </div>
  );
};

export default Home;
