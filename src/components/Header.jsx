import { Link, NavLink, redirect } from "react-router-dom";
import Sidebar from "./sidebar";
import avatarIcon from "../assets/images/avatar-icon.png";

const Header = () => {
  
  function fakeLogOut() {
    localStorage.removeItem("loggedIn");
    const response = redirect("/login");
    response.body = true;
    return response;
  }

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
          <Link to="login" className="login-link">
            <img src={avatarIcon} alt="avatar-icon" />
          </Link>
          <button onClick={fakeLogOut}>X</button>
        </nav>
        <Sidebar />
      </header>
    </>
  );
};

export default Header;
