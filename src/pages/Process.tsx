import React from 'react';
import ProcessComponent from '../components/Process';

export default function Process() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Onze Werkwijze
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Van concept tot realisatie: zo werken wij aan uw project
          </p>
        </div>
      </div>

      <ProcessComponent />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Onze Garanties</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vaste prijsafspraak, geen verrassingen achteraf</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Duidelijke planning en communicatie</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gratis support in de eerste maand na oplevering</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Wat Kunt U Verwachten?</h2>
              <div className="prose prose-indigo">
                <p className="text-gray-600 mb-4">
                  Bij elk project wijzen we een dedicated projectmanager aan die uw vaste aanspreekpunt is. 
                  We houden u op de hoogte via regelmatige updates en demo's.
                </p>
                <p className="text-gray-600">
                  Na oplevering krijgt u een uitgebreide instructie over het gebruik van uw nieuwe website 
                  en zorgen we voor een soepele overdracht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}