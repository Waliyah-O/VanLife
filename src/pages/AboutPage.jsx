import { Link } from "react-router-dom";

import bgImg from "../assets/images/about-hero.png";

function AboutPage() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" alt="" />
      <div className="about-page-content">
        <h1>Don't settle for cramped when you can embrace comfort.</h1>
        <p>
          Our mission is to enliven your road trips and truck needs with the perfect
          rental rigs. Our rigs are re-certified before each trip to ensure your
          plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of rent_a_rig enthusiasts who know firsthand the
          magic of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <div style={{display: 'flex', gap: '2em'}}>
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
