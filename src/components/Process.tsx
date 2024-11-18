import React from "react";
import "../styles/process.css";

const Process = () => {
  return (
    <section className="process" id="process">
      <h2>Ons Proces</h2>
      <div className="process-steps">
        <div className="process-step">
          <div className="step-number">1</div>
          <h3>Analyse</h3>
          <p>We beginnen met het begrijpen van uw bedrijf en doelen</p>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <h3>Ontwerp</h3>
          <p>We creëren een design dat past bij uw merk</p>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <h3>Ontwikkeling</h3>
          <p>We bouwen uw website met moderne technologieën</p>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <h3>Lancering</h3>
          <p>We zorgen voor een soepele livegang van uw website</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
