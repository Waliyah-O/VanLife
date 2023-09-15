import { NavLink, Link } from "react-router-dom";
import avatarIcon from "../../assets/images/avatar-icon.png";
import "./sidebar.scss";
const Sidebar = () => {
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
            <NavLink to="vans">Vans</NavLink>
          </li>
          <li>
            <NavLink to="trucks">Trucks</NavLink>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
