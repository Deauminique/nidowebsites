const Portfolio = () => {
  const projects = [
    {
      title: "TechFlow Solutions",
      category: "Web Applicatie",
      description: "Een moderne web applicatie voor projectmanagement met real-time updates en team collaboratie.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      results: ["40% snellere projectafhandeling", "200+ dagelijkse gebruikers"]
    },
    {
      title: "GreenLeaf Webshop",
      category: "E-commerce",
      description: "Complete e-commerce oplossing voor een duurzame producten winkel met geavanceerde filtering en zoekfuncties.",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      image: "bg-gradient-to-br from-green-400 to-green-600",
      results: ["150% omzetgroei", "65% lagere bounce rate"]
    },
    {
      title: "FitLife Platform",
      category: "Health & Fitness",
      description: "Fitness platform met persoonlijke workout tracking en voedingsadvies op maat.",
      technologies: ["Vue.js", "Firebase", "TailwindCSS"],
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      results: ["10.000+ actieve gebruikers", "4.8/5 gebruikersscore"]
    },
    {
      title: "CityGuide App",
      category: "Toerisme",
      description: "Interactieve stadsgids met AR-integratie en offline kaartfunctionaliteit.",
      technologies: ["React Native", "GraphQL", "AWS"],
      image: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      results: ["50.000+ downloads", "Featured in App Store"]
    },
    {
      title: "RestaurantConnect",
      category: "Horeca",
      description: "Reserveringssysteem en menu-beheer platform voor restaurants.",
      technologies: ["Angular", "Express.js", "MySQL"],
      image: "bg-gradient-to-br from-red-400 to-red-600",
      results: ["30+ aangesloten restaurants", "60% minder administratietijd"]
    },
    {
      title: "EduLearn Platform",
      category: "Educatie",
      description: "Online leerplatform met video-integratie en voortgangstracking.",
      technologies: ["Django", "React", "PostgreSQL"],
      image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      results: ["5000+ studenten", "95% cursus voltooiing"]
    }
  ];

  const testimonials = [
    {
      name: "Lisa van den Berg",
      role: "CEO TechFlow Solutions",
      content: "NIDO Websites heeft onze visie perfect vertaald naar een gebruiksvriendelijke web applicatie. De samenwerking was professioneel en het eindresultaat overtrof onze verwachtingen.",
      image: "bg-gray-200"
    },
    {
      name: "Mark Hendricks",
      role: "Eigenaar GreenLeaf",
      content: "Dankzij de nieuwe webshop is onze online verkoop explosief gegroeid. De expertise en betrokkenheid van het team was indrukwekkend.",
      image: "bg-gray-200"
    },
    {
      name: "Sarah de Boer",
      role: "Oprichter FitLife",
      content: "Van concept tot lancering heeft NIDO ons perfect begeleid. Hun technische kennis en creativiteit hebben ons platform naar een hoger niveau getild.",
      image: "bg-gray-200"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Ons Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ontdek onze succesvolle projecten en zie hoe wij bedrijven helpen groeien in de digitale wereld
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group rounded-xl overflow-hidden border-2 border-gray-100 hover:border-blue-500 transition-colors">
            <div className={`h-64 ${project.image} group-hover:opacity-90 transition-opacity`}></div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-blue-600">{project.category}</p>
                </div>
              </div>
              <p className="text-gray-600">{project.description}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologieën</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Resultaten</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-gray-600">✓ {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 -mx-4 px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center">Wat Onze Klanten Zeggen</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.image}`}></div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Klaar om uw project te bespreken?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We helpen u graag uw digitale ambities waar te maken
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Start een gesprek
        </a>
      </section>
    </div>
  )
}

export default Portfolio
