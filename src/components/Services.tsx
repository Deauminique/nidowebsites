import React from "react";
import {
  Monitor,
  Smartphone,
  Gauge,
  Search,
  Palette,
  Code,
} from "lucide-react";
import type { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    title: "Website Development",
    description:
      "Moderne, snelle websites die perfect werken op alle apparaten.",
    icon: Monitor,
  },
  {
    title: "Webshop Development",
    description: "Professionele e-commerce oplossingen voor uw online verkoop.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimalisatie",
    description: "Verbeter uw online zichtbaarheid en bereik meer klanten.",
    icon: Search,
  },
  {
    title: "UI/UX Design",
    description: "Gebruiksvriendelijke interfaces met een moderne uitstraling.",
    icon: Palette,
  },
  {
    title: "Web Applicaties",
    description: "Custom web applicaties voor uw specifieke bedrijfsprocessen.",
    icon: Code,
  },
  {
    title: "Performance",
    description: "Optimalisatie voor maximale snelheid en conversie.",
    icon: Gauge,
  },
];

const Services: React.FC = () => {
  return (
    <div id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Onze Diensten</h2>
          <p className="services-description">
            Van concept tot realisatie, wij bieden alle diensten die u nodig
            heeft voor een sterke online aanwezigheid.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
              </div>
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
