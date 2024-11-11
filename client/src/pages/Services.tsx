const Services = () => {
  return (
    <div className="space-y-20">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Onze Diensten
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Van concept tot realisatie: wij bieden complete weboplossingen voor elk type bedrijf
        </p>
      </section>

      {/* Main Services */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 transition-colors space-y-4">
          <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Website Design</h3>
          <p className="text-gray-600">
            Moderne, gebruiksvriendelijke designs die uw merk perfect weerspiegelen. We creëren unieke websites die uw bezoekers converteren naar klanten.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Responsive ontwerp</li>
            <li>✓ UI/UX optimalisatie</li>
            <li>✓ Merk integratie</li>
            <li>✓ Conversion focused</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 transition-colors space-y-4">
          <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Web Development</h3>
          <p className="text-gray-600">
            Krachtige, schaalbare websites gebouwd met de nieuwste technologieën. Performance en betrouwbaarheid staan voorop.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Custom development</li>
            <li>✓ E-commerce oplossingen</li>
            <li>✓ CMS integratie</li>
            <li>✓ API ontwikkeling</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 transition-colors space-y-4">
          <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">SEO & Marketing</h3>
          <p className="text-gray-600">
            Optimalisatie voor zoekmachines en digitale marketing strategieën om uw online zichtbaarheid te vergroten.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✓ SEO optimalisatie</li>
            <li>✓ Performance analyse</li>
            <li>✓ Content strategie</li>
            <li>✓ Analytics setup</li>
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 -mx-4 px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center">Ons Werkproces</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analyse & Planning</h3>
                <p className="text-gray-600">We beginnen met een grondige analyse van uw behoeften en doelen. Samen stellen we een plan op dat perfect aansluit bij uw wensen.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design & Development</h3>
                <p className="text-gray-600">Ons team gaat aan de slag met het ontwerp en de ontwikkeling. U wordt regelmatig op de hoogte gehouden van de voortgang.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Testing & Optimalisatie</h3>
                <p className="text-gray-600">We testen grondig op functionaliteit en performance, en optimaliseren waar nodig voor de beste resultaten.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
                <p className="text-gray-600">Na de lancering blijven we beschikbaar voor ondersteuning en verdere optimalisaties van uw website.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center">Transparante Prijzen</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border-2 border-gray-100 space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Starter</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">€999</span>
                <span className="text-gray-600">/vanaf</span>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Responsive website</li>
              <li>✓ 5 pagina's</li>
              <li>✓ Contact formulier</li>
              <li>✓ Basic SEO</li>
              <li>✓ 3 maanden support</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-2 border-blue-500 space-y-6 relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm">
              Populair
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Professional</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">€1999</span>
                <span className="text-gray-600">/vanaf</span>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Alles van Starter</li>
              <li>✓ 10 pagina's</li>
              <li>✓ CMS systeem</li>
              <li>✓ Uitgebreide SEO</li>
              <li>✓ 6 maanden support</li>
              <li>✓ Analytics integratie</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-2 border-gray-100 space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Enterprise</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">Op maat</span>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Alles van Professional</li>
              <li>✓ Onbeperkt pagina's</li>
              <li>✓ Custom functionaliteit</li>
              <li>✓ E-commerce mogelijk</li>
              <li>✓ 12 maanden support</li>
              <li>✓ API integraties</li>
              <li>✓ Performance optimalisatie</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
