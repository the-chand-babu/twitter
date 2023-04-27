import style from "./home.module.css";
import React from "react";
import Search from "../../component/rightSideBar/searchbar/SearchBar";
import Trends from "../../component/rightSideBar/whatsHappening/WhatsNew";


const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.sidebar}>sidebar... invoks</div>

      <div className={style.mainContainer}>main tweets component involks</div>
      <div>
        <Search />
        <Trends />
      </div>
    </div>
  );
};

export default Home;
