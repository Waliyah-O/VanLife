import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>
        <nav>
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About page
          </NavLink>
          <NavLink
            to="/vans"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
