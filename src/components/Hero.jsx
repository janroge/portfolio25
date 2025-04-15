import React from "react";
import Lottie from "lottie-react";
import animationData from "../animations/hero-animation.json"; // Ajusta la ruta según corresponda
import "./hero.css";

function Hero({ hero }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
        </div>
        <div className="hero-animation">
          <Lottie
            animationData={animationData}
            loop={true}
            autoPlay={true}
            style={{ height: "250px", width: "250px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
