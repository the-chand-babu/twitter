import React from "react";
import style from "./Tweet.module.css";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { BsUpload } from "react-icons/bs";
import { CgPoll } from "react-icons/cg";
import {FcLike} from 'react-icons/fc'

//https://placebeard.it/640x360
function Tweet(props) {
  const { tweet } = props;
  console.log(tweet);
  return (
    <div className={style.tweetContainer}>
      <div className={style.profileDiv}>
        <div>
          <img
            src="https://pbs.twimg.com/profile_banners/132385468/1645007643/1500x500"
            alt="salman"
          />
        </div>
        <div>
          <h2>{tweet.tweetedBy.name}</h2>
          <p>Beign Human</p>
        </div>
      </div>
      <img src={tweet.image} alt="salman Post" />
      <div className={style.iconDiv}>
        <span className={style.icons}>
          <FaRegComment />
          <span>1</span>
        </span>
        <span className={style.icons}>
          <FaRetweet />
          <span>{tweet.reTweetsCount}</span>
        </span>
        <span className={style.icons}>
          {tweet.isLiked && <FcLike/>||<GrFavorite />}
          <span>{tweet.likeCount}</span>
        </span>
        <span className={style.icons}>
          <CgPoll />
          <span>1</span>
        </span>
        <span className={style.icons}>
          <BsUpload />
          <span>1</span>
        </span>
      </div>
    </div>
  );
}

export default Tweet;
