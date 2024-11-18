import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Websites die werken voor uw bedrijf</h1>
        <p>Professionele webontwikkeling op maat voor uw onderneming</p>
        <a href="#contact" className="cta-button">
          Neem contact op
        </a>
      </div>
    </section>
  );
};

export default Hero;
