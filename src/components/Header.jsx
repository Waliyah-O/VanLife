import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // const activeStyle = {
  //   fontWeight: "bold",
  //   textDecoration: "underline",
  //   color: "#161616",
  // };
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>
        <nav>
          <NavLink></NavLink>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Host
          </NavLink>
          <NavLink></NavLink>
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
        </nav>
      </header>
    </div>
  );
};

export default Header;
