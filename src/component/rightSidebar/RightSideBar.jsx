import React from 'react'
import Search from "../../component/rightSideBar/searchbar/SearchBar";
import TrendingBar from "../../component/rightSideBar/whatsHappeningBar/TrendingBar";
import WhoToFollow from "../../component/rightSideBar/whoToFollowBar/WhoToFollow";

const RightSideBar = () => {
  return (
    <div>
        <Search />     
        <TrendingBar/> 
        <WhoToFollow />
    </div>
  )
}

export default RightSideBar
