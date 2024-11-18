import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Neem contact met ons op</h3>
          <p>Wij helpen u graag met uw volgende project</p>
          <div className="contact-details">
            <p>Email: info@nido.nl</p>
            <p>Tel: +31 (0)6 12345678</p>
            <p>Adres: Amsterdam, Nederland</p>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Naam" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Uw bericht" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Verstuur
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
