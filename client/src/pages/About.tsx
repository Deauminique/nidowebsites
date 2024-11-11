const About = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Over NIDO Websites
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Wij zijn een team van gepassioneerde web professionals die geloven in het creëren van 
          impactvolle digitale ervaringen die bedrijven helpen groeien.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Ons Verhaal</h2>
          <p className="text-gray-600">
            NIDO Websites werd opgericht met één duidelijk doel: het leveren van hoogwaardige 
            weboplossingen die écht waarde toevoegen voor onze klanten. We begonnen als een klein 
            team van ontwikkelaars en designers met een passie voor het web.
          </p>
          <p className="text-gray-600">
            Door de jaren heen zijn we uitgegroeid tot een full-service webbureau dat zich 
            onderscheidt door persoonlijke aandacht, technische expertise en creatieve oplossingen. 
            We blijven onszelf continu ontwikkelen om voorop te blijven lopen in de snel 
            veranderende digitale wereld.
          </p>
        </div>
        <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Team foto</span>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 -mx-4 px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Mission */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Onze Missie</h2>
            <p className="text-xl text-gray-600">
              Het creëren van innovatieve weboplossingen die bedrijven helpen succesvol te zijn 
              in de digitale wereld, door technische excellentie te combineren met 
              gebruiksvriendelijk design.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center">Kwaliteit</h3>
              <p className="text-gray-600 text-center">
                We streven naar perfectie in elk aspect van ons werk, van code tot design.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center">Communicatie</h3>
              <p className="text-gray-600 text-center">
                Open en eerlijke communicatie staat centraal in onze werkwijze.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center">Innovatie</h3>
              <p className="text-gray-600 text-center">
                We blijven vooroplopen met de nieuwste technologieën en trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ons Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Maak kennis met de experts die uw digitale visie tot leven brengen
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-gray-100 w-48 h-48 rounded-full mx-auto flex items-center justify-center">
              <span className="text-gray-400">Foto</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Thomas de Vries</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-100 w-48 h-48 rounded-full mx-auto flex items-center justify-center">
              <span className="text-gray-400">Foto</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Laura Bakker</h3>
              <p className="text-gray-600">UX Designer</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-100 w-48 h-48 rounded-full mx-auto flex items-center justify-center">
              <span className="text-gray-400">Foto</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Mark Jansen</h3>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-100 w-48 h-48 rounded-full mx-auto flex items-center justify-center">
              <span className="text-gray-400">Foto</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sophie van Dijk</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 -mx-4 px-4 py-16 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div>Projecten Voltooid</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Tevreden Klanten</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div>Jaren Ervaring</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div>Klanttevredenheid</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
