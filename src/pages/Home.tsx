import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Waarom NIDO Websites?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Wij combineren creativiteit met technische expertise om websites
              te bouwen die uw bedrijf laten groeien.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expertise
              </h3>
              <p className="text-gray-600">
                Met jarenlange ervaring in webdevelopment leveren wij
                hoogwaardige oplossingen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Maatwerk
              </h3>
              <p className="text-gray-600">
                Elke website wordt op maat gemaakt om perfect aan te sluiten bij
                uw wensen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Support
              </h3>
              <p className="text-gray-600">
                Ook na de lancering staan we voor u klaar met ondersteuning en
                onderhoud.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Neem contact op
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
