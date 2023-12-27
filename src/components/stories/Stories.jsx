import React, { useContext } from "react";
import "./stories.scss";
import { authContext } from "../../context/authContext";

export const Stories = () => {
  //for first story
  const { currentUser } = useContext(authContext);

  //temporary data
  const stories = [
    {
      id: 1,
      name: "John Doe",
      profile:
        "https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      profile:
        "https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      profile:
        "https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      profile:
        "https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      name: "John Doe",
      profile:
        "https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    }
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profile} alt="story" />
        <button>+</button>
        <span>{currentUser.name}</span>
      </div>
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.profile} alt="story" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};
