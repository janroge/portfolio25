import React from "react";
import { Player } from "lottie-react";
import animationData from "./animations/hero-animation.json"; // Ajusta la ruta según donde la guardes
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
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "250px", width: "250px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
