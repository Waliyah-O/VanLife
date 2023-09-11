import "./sidebar.css";
import { NavLink } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log('click');
  };
  return (
    <div className="sidebar-container">
      <NavLink className="hamburger" onClick={toggle}>
        <RxHamburgerMenu />
      </NavLink>
      {/* <h1 isOpen={isOpen} onClick={toggle} >&#9776;</h1> */}
      <nav>
        <NavLink to="home" onClick={toggle}>
          home
        </NavLink>
        <NavLink to="about" onClick={toggle}>
          about
        </NavLink>
        <NavLink to="vans" onClick={toggle}>
          vans
        </NavLink>
        <NavLink to="trucks" onClick={toggle}>
          trucks
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
