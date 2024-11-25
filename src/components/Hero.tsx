import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <main className="hero-main">
            <div className="hero-text">
              <h1 className="hero-title">
                <span>Websites die werken</span>
                <span className="accent">voor uw bedrijf</span>
              </h1>
              <p className="hero-description">
                Wij creëren websites die niet alleen mooi zijn, maar ook
                resultaat opleveren. Van design tot development, wij zorgen voor
                een complete online presence.
              </p>
              <div className="cta-container">
                <a href="#contact" className="cta-button">
                  Vrijblijvend gesprek
                  <ArrowRight className="cta-icon" />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={`${baseUrl}images/hero.jpg`}
          alt="Team working on web development"
        />
      </div>
    </div>
  );
};

export default Hero;
