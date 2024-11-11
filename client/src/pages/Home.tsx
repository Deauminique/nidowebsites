import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Breng uw visie tot leven met <span className="text-blue-600">NIDO Websites</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Wij creëren moderne, responsieve websites die uw bedrijf online laten groeien. 
          Van elegante webshops tot krachtige bedrijfsplatforms.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/portfolio" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Bekijk ons werk
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Neem contact op
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4 p-6 rounded-xl bg-gray-50">
          <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Modern Design</h3>
          <p className="text-gray-600">
            Strakke, moderne designs die uw merk perfect weerspiegelen
          </p>
        </div>

        <div className="text-center space-y-4 p-6 rounded-xl bg-gray-50">
          <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Responsive</h3>
          <p className="text-gray-600">
            Perfect werkend op alle apparaten en schermformaten
          </p>
        </div>

        <div className="text-center space-y-4 p-6 rounded-xl bg-gray-50">
          <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Optimale Prestaties</h3>
          <p className="text-gray-600">
            Snelle laadtijden en optimale gebruikerservaring
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 -mx-4 px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Waarom NIDO Websites?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">✓ Expertise</h3>
              <p className="text-gray-600">
                Met jarenlange ervaring in webontwikkeling leveren wij websites van topkwaliteit
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">✓ Persoonlijke Aanpak</h3>
              <p className="text-gray-600">
                We luisteren naar uw wensen en vertalen deze naar de perfecte online oplossing
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">✓ Support</h3>
              <p className="text-gray-600">
                Ook na oplevering staan we voor u klaar met uitstekende ondersteuning
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Elke website wordt op maat gemaakt volgens uw specifieke behoeften
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Klaar om uw online aanwezigheid te versterken?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Laat ons u helpen met het creëren van een website die uw bedrijf naar het volgende niveau tilt
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Start uw project
        </Link>
      </section>
    </div>
  )
}

export default Home
