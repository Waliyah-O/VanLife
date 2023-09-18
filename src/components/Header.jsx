import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import avatarIcon from "../assets/images/avatar-icon.png";
import { useState } from "react";
import Loader from "./Loader";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  // function fakeLogOut() {
  //   setLoggingOut(true);
  //   localStorage.removeItem("loggedIn");

  //   const response = redirect("/login");
  //   response.body = true;
  //   return response;
  // }

  const fakeLogOut = () => {
    // Show the loader
    setLoggingOut(true);

    // Simulate the logout process
    setTimeout(() => {
      // Clear local storage
      localStorage.removeItem("loggedIn");

      // Hide the loader
      setLoggingOut(false);

      // Redirect to the login page
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <header>
        <Link className="site-logo" to="/">
          #rent_a_rig
        </Link>
        <nav>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            About page
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to="/trucks"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Trucks
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Contact us
          </NavLink>

          {isLoggedIn ? (
            <div onClick={fakeLogOut}>
              <NavLink>
                <FiLogOut />
              </NavLink>
            </div>
          ) : (
            <NavLink to="login" className="login-link">
              <img src={avatarIcon} alt="avatar-icon" />
              {/* <FiLogIn /> */}
            </NavLink>
          )}
        </nav>
        <Sidebar fakeLogOut={fakeLogOut} isLoggedIn={isLoggedIn} />
      </header>
    </>
  );
};

export default Header;
