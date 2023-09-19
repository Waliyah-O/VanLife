import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-hero.png";

function AboutPage() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" alt="" />
      <div className="about-page-content">
        <h1>Don&#39;t settle for less when you can get more. </h1>
        <p>
          Our mission is to enliven your road trips and truck needs with the
          perfect rigs. Our rigs are re-certified before each trip to ensure
          your plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of rent_a_rig enthusiasts who know firsthand the
          magic of first class vans and trucks.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <div className="about-buttons">
          <Link className="link-button" to="/vans">
            Explore our vans
          </Link>
          <Link className="link-button" to="/trucks">
            Explore our trucks
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
