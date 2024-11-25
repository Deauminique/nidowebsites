import React from "react";
import type { ProjectItem } from "../types";

const Portfolio: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const projects: ProjectItem[] = [
    {
      title: "E-commerce Platform",
      description: "Moderne webshop voor een fashion retailer",
      image: `${baseUrl}images/portfolio1.jpg`,
    },
    {
      title: "Corporate Website",
      description: "Professionele website voor een advocatenkantoor",
      image: `${baseUrl}images/portfolio2.jpg`,
    },
    {
      title: "Web Applicatie",
      description: "Custom CRM systeem voor een groothandel",
      image: `${baseUrl}images/portfolio3.jpg`,
    },
  ];

  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Recent Work</h2>
          <p className="portfolio-description">
            Ontdek enkele van onze succesvolle projecten
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
