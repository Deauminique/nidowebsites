import { useState, FormEvent } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'website',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is verplicht'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ongeldig email adres'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bericht is verplicht'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'website',
        message: ''
      })
    }
  }

  const faqs = [
    {
      question: "Wat zijn de gemiddelde doorlooptijden van een project?",
      answer: "De doorlooptijd varieert per project. Een eenvoudige website kan binnen 4-6 weken gereed zijn, terwijl complexere projecten 3-6 maanden kunnen duren. Tijdens ons eerste gesprek kunnen we een specifieke planning maken voor uw project."
    },
    {
      question: "Wat zijn de kosten van een website?",
      answer: "De kosten zijn afhankelijk van uw wensen en eisen. We bieden verschillende pakketten vanaf €999. Neem contact met ons op voor een persoonlijke offerte die past bij uw budget en doelstellingen."
    },
    {
      question: "Bieden jullie ook onderhoud en support na oplevering?",
      answer: "Ja, we bieden verschillende onderhoudscontracten aan om uw website up-to-date en veilig te houden. Ook kunt u bij ons terecht voor technische support en doorontwikkeling."
    }
  ]

  return (
    <div className="space-y-20">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Contact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Klaar om uw project te bespreken? Neem contact met ons op voor een vrijblijvend gesprek.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <section className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Informatie</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Telefoon</h3>
                  <p className="text-gray-600">+31 (0)20 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@nidowebsites.nl</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Adres</h3>
                  <p className="text-gray-600">Webstraat 123<br />1234 AB Amsterdam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Openingstijden</h2>
            <div className="space-y-2 text-gray-600">
              <p>Maandag - Vrijdag: 9:00 - 17:00</p>
              <p>Weekend: Gesloten</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Naam *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Uw naam"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="uw@email.nl"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium mb-1">
                Telefoon
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300"
                placeholder="Uw telefoonnummer"
              />
            </div>

            <div>
              <label htmlFor="company" className="block font-medium mb-1">
                Bedrijf
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300"
                placeholder="Uw bedrijfsnaam"
              />
            </div>

            <div>
              <label htmlFor="service" className="block font-medium mb-1">
                Gewenste Dienst
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300"
              >
                <option value="website">Website</option>
                <option value="webshop">Webshop</option>
                <option value="webapp">Web Applicatie</option>
                <option value="other">Anders</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Bericht *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full p-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} h-32`}
                placeholder="Vertel ons meer over uw project..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Verstuur Bericht
            </button>
          </form>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 -mx-4 px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
