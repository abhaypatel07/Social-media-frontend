import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Navbar } from "./components/navbar/Navbar";
import { LeftBar } from "./components/leftBar/LeftBar";
import { RightBar } from "./components/rightBar/RightBar";
import { Profile } from "./pages/profile/Profile";
import "./style.scss";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { authContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(authContext);
  console.log(currentUser);

  //for darkmode
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  const Layout = () => {
    return (
      <div className="theme-dark">
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className="theme-dark">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
