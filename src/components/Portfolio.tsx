import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Ons Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="./images/portfolio1.jpg" alt="Portfolio Project 1" />
          <div className="portfolio-info">
            <h3>E-commerce Platform</h3>
            <p>Online winkel met moderne uitstraling</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img src="./images/portfolio2.jpg" alt="Portfolio Project 2" />
          <div className="portfolio-info">
            <h3>Bedrijfswebsite</h3>
            <p>Professionele website voor lokaal bedrijf</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img src="./images/portfolio3.jpg" alt="Portfolio Project 3" />
          <div className="portfolio-info">
            <h3>Restaurant Website</h3>
            <p>Website met online reserveringssysteem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
