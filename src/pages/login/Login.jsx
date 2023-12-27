import React, { useContext } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";

export const Login = () => {
  const { login } = useContext(authContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            magni tempore dolor quis libero accusantium, distinctio
            necessitatibus cum voluptatum ab beatae, labore, praesentium eaque!
          </p>
          <span>Don't You Have An Account?</span>
          <Link to="../register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
