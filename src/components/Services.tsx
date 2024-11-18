import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Onze Diensten</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Webdesign</h3>
          <p>Moderne en gebruiksvriendelijke websites die uw merk versterken</p>
        </div>
        <div className="service-card">
          <h3>Webontwikkeling</h3>
          <p>Technisch sterke websites met optimale prestaties</p>
        </div>
        <div className="service-card">
          <h3>E-commerce</h3>
          <p>Online winkels die verkoop stimuleren</p>
        </div>
        <div className="service-card">
          <h3>SEO Optimalisatie</h3>
          <p>Betere vindbaarheid in zoekmachines</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
