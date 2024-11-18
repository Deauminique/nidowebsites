import React from "react";
import { Zap, Target, Users, Trophy } from "lucide-react";
import type { ProcessStep } from "../types";

const reasons: ProcessStep[] = [
  {
    name: "Snelle Websites",
    description:
      "Wij bouwen razendsnel ladende websites die uw bezoekers direct boeien.",
    icon: Zap,
  },
  {
    name: "Resultaatgericht",
    description:
      "Focus op het behalen van uw doelen en het genereren van meer leads.",
    icon: Target,
  },
  {
    name: "Gebruiksvriendelijk",
    description:
      "Intuïtieve websites die uw bezoekers moeiteloos kunnen gebruiken.",
    icon: Users,
  },
  {
    name: "Professioneel",
    description: "Hoogwaardige websites die uw bedrijf perfect representeren.",
    icon: Trophy,
  },
];

const Process: React.FC = () => {
  return (
    <div id="process" className="process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">Waarom NIDO Websites?</h2>
          <p className="process-description">
            Wij combineren creativiteit met technische expertise om websites te
            bouwen die écht werken voor uw bedrijf
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.name} className="reason-card">
              <div className="reason-icon-wrapper">
                <reason.icon className="reason-icon" />
              </div>
              <div className="reason-content">
                <h3 className="reason-title">{reason.name}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
