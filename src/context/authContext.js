import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "Abhay Patel",
    profile:
      "https://images.pexels.com/photos/17822820/pexels-photo-17822820/free-photo-of-half-naked-brunette-relaxing-on-a-beach-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

  const login = () => {
    //to do
    setCurrentUser({
      id: 1,
      name: "Abhay Patel",
      profile:
        "https://images.pexels.com/photos/17822820/pexels-photo-17822820/free-photo-of-half-naked-brunette-relaxing-on-a-beach-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <authContext.Provider value={{ currentUser, login }}>
      {children}
    </authContext.Provider>
  );
};
