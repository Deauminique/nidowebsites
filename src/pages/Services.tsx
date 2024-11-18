import React from 'react';
import ServicesComponent from '../components/Services';

export default function Services() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Onze Diensten
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Ontdek hoe wij uw online aanwezigheid kunnen versterken
          </p>
        </div>
      </div>
      
      <ServicesComponent />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Technologieën</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" 
                   alt="React" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-medium">React</p>
            </div>
            <div className="text-center p-4">
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" 
                   alt="TypeScript" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-medium">TypeScript</p>
            </div>
            <div className="text-center p-4">
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" 
                   alt="Node.js" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-medium">Node.js</p>
            </div>
            <div className="text-center p-4">
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png" 
                   alt="Tailwind CSS" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-medium">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}