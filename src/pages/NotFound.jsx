import { Link } from "react-router-dom";
import notFoundImg from '../assets/images/404Robot.png'

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <img src={notFoundImg} alt="" />
      <h1>Sorry the page you were looking for was not found.</h1>
      <Link to="/" className="link-button">
        Return to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
