import { NavLink, Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = ({ isLoggedIn, fakeLogOut }) => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="host">Host</NavLink>
          </li>
          <li>
            <NavLink to="vans">Vans</NavLink>
          </li>
          <li>
            <NavLink to="trucks">Trucks</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact us</NavLink>
          </li>
          <li>
            {isLoggedIn ? (
              <div>
                <NavLink onClick={fakeLogOut}>Logout</NavLink>
              </div>
            ) : (
              <NavLink to="login" className="login-link">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
