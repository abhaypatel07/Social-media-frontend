import React from "react";
import "./profile.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Posts } from "../../components/posts/Posts";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/7179512/pexels-photo-7179512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cover"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/17822820/pexels-photo-17822820/free-photo-of-half-naked-brunette-relaxing-on-a-beach-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile"
          className="profile"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com/">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com/">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <LocationOnIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Lama.Dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <MarkunreadIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};
