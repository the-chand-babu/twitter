import React, { useEffect } from "react";
import Tweet from "../liveTweetFeed/Tweet";
import { useDispatch, useSelector } from "react-redux";
import { TweetSlice } from "../storeComponent/reducer";
import style from "./LiveTweet.module.css";

function LiveTweet() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/Tweet.json")
      .then((res) => res.json())
      .then((res) => dispatch(TweetSlice.actions.AddAllTweet(res)));
  }, []);

  const TweetData = useSelector((state) => state.Tweets);

  return (
    <div className={style.TweetContainer}>
      {TweetData.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} index={index} />;
      })}
    </div>
  );
}

export default LiveTweet;
