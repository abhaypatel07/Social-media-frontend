import React, { useContext } from "react";
import "./comments.scss";
import { authContext } from "../../context/authContext";

export const Comments = () => {
  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/17822820/pexels-photo-17822820/free-photo-of-half-naked-brunette-relaxing-on-a-beach-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, eveniet sint. Quo numquam dolor ipsam? Facilis dolores dolorum odio. Qui officia voluptatibus vitae repudiandae autem?",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/17822820/pexels-photo-17822820/free-photo-of-half-naked-brunette-relaxing-on-a-beach-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, eveniet sint. Quo numquam dolor ipsam? Facilis dolores dolorum odio. Qui officia voluptatibus vitae repudiandae autem?",
    },
  ];

  //for comment
  const { currentUser } = useContext(authContext);

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profile} alt="user" />
        <input type="text" placeholder="Write a comment.." />
        <button>Send</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <img src={comment.profilePic} alt={comment.name} />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};
