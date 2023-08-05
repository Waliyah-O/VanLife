import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/host">Host</Link>
          <Link to="/about">About page</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
