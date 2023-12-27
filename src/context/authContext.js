import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "Abhay Patel",
    profile:
      "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  const login = () => {
    //to do
    setCurrentUser({
      id: 1,
      name: "Abhay Patel",
      profile:
        "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
