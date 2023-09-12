import { NavLink } from "react-router-dom";
import "./sidebar.scss";
// import './sidebar.css'
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
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
