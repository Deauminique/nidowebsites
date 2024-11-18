import React from 'react';
import PortfolioComponent from '../components/Portfolio';

export default function Portfolio() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Ons Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Ontdek onze succesvolle projecten
          </p>
        </div>
      </div>

      <PortfolioComponent />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Wat Onze Klanten Zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-600">A</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Anna Bakker</h4>
                  <p className="text-sm text-gray-500">Fashion Retailer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "NIDO heeft onze visie perfect vertaald naar een prachtige webshop. 
                De verkoop is sinds de lancering verdubbeld!"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-600">M</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Mark de Vries</h4>
                  <p className="text-sm text-gray-500">Advocatenkantoor</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Professionele aanpak en uitstekende service. Onze nieuwe website 
                straalt precies de juiste professionaliteit uit."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-600">S</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Sophie Jansen</h4>
                  <p className="text-sm text-gray-500">Groothandel</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Het CRM systeem dat NIDO voor ons heeft ontwikkeld heeft onze 
                efficiency enorm verbeterd. Topservice!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}