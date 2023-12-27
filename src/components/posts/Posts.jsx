import React from "react";
import "./posts.scss";
import { Post } from "../post/Post";

export const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/17822820/pexels-photo-17822820/free-photo-of-half-naked-brunette-relaxing-on-a-beach-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, eveniet sint. Quo numquam dolor ipsam? Facilis dolores dolorum odio. Qui officia voluptatibus vitae repudiandae autem?",
      img: "https://images.pexels.com/photos/18378055/pexels-photo-18378055/free-photo-of-orange-cat-looking-for-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/17822820/pexels-photo-17822820/free-photo-of-half-naked-brunette-relaxing-on-a-beach-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, eveniet sint. Quo numquam dolor ipsam? Facilis dolores dolorum odio. Qui officia voluptatibus vitae repudiandae autem?",
      img: "https://images.pexels.com/photos/18177110/pexels-photo-18177110/free-photo-of-white-horse-in-herd.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};
