import React from 'react';
import ContactComponent from '../components/Contact';

export default function Contact() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Laten we samen uw project bespreken
          </p>
        </div>
      </div>

      <ContactComponent />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde Vragen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Wat kost een website?</h3>
              <p className="text-gray-600">
                De kosten zijn afhankelijk van uw wensen en eisen. We maken graag een 
                vrijblijvende offerte op maat.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Hoe lang duurt het ontwikkelproces?</h3>
              <p className="text-gray-600">
                Gemiddeld duurt een project 6-8 weken, maar dit kan variëren afhankelijk 
                van de complexiteit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Krijg ik ondersteuning na de lancering?</h3>
              <p className="text-gray-600">
                Ja, we bieden een maand gratis support na lancering en hebben verschillende 
                onderhoudsplannen beschikbaar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is de website mobiel-vriendelijk?</h3>
              <p className="text-gray-600">
                Absoluut! Alle websites die we maken zijn volledig responsive en werken 
                perfect op alle apparaten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}