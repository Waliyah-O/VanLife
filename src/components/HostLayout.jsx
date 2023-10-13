import { Link, NavLink, Outlet } from "react-router-dom";

export const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="." //react router incorporated unix change dir cmd cd .. takes you to the parent folder, cd . leaves you on the current folder. "." leaves you on the current route, ".." takes you to the parent route
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Rigs
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : null)}>
          <div className="dropdown">
            <button className="dropbtn">Add Rig</button>
            <div className="dropdown-content">
              <Link to="createVan">Van</Link>
              <Link to="createTruck">Truck</Link>
            </div>
          </div>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
