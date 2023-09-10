import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #RENT_A_RIG
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
          {/* <div className="hamburger">
            <RxHamburgerMenu onClick={openMenu} />
          </div> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
