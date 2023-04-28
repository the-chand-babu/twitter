import React from 'react'
import Search from "../../component/rightSideBar/searchbar/SearchBar";
import TrendingBar from "../../component/rightSideBar/whatsHappeningBar/TrendingBar";
import Righthomebox2 from "../../component/rightSideBar/whoToFollowBar/WhoToFollow";

const RightSideBar = () => {
  return (
    <div>
        <Search />     
        <TrendingBar/> 
        <Righthomebox2 />
    </div>
  )
}

export default RightSideBar
