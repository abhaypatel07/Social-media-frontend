import React, { useState } from "react";
import "./post.scss";
import { Link } from "react-router-dom";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Comments } from "../comments/Comments";

export const Post = (props) => {
  //temporary for like
  const [like, setLike] = useState(false);

  //   for comment
  const [comment, setComment] = useState(false);

  const { post } = props;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt={post.name} />
            <div>
              <Link
                className="details"
                to={`profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
                <span className="date">1 min ago</span>
              </Link>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt={post.name} />
        </div>
        <div className="info">
          <div className="item">
            {like ? (
              <FavoriteOutlinedIcon onClick={() => setLike(!like)} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={() => setLike(!like)} />
            )}
            12 likes
          </div>
          <div className="item">
            <SmsOutlinedIcon onClick={() => setComment(!comment)} />8 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon /> Share
          </div>
        </div>
        {comment && <Comments />}
      </div>
    </div>
  );
};
