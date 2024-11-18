import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import type { FormData } from "../types";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-background">
        <div className="contact-background-left"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-content">
            <h2 className="contact-title">Neem Contact Op</h2>
            <p className="contact-description">
              Klaar om uw project te bespreken? Neem contact met ons op voor een
              vrijblijvend gesprek.
            </p>
            <dl className="contact-details">
              <div className="contact-detail">
                <dt className="sr-only">Phone number</dt>
                <dd className="contact-detail-item">
                  <Phone className="contact-icon" />
                  <span>+31 (0)20 123 4567</span>
                </dd>
              </div>
              <div className="contact-detail">
                <dt className="sr-only">Email</dt>
                <dd className="contact-detail-item">
                  <Mail className="contact-icon" />
                  <span>info@nido-websites.nl</span>
                </dd>
              </div>
              <div className="contact-detail">
                <dt className="sr-only">Address</dt>
                <dd className="contact-detail-item">
                  <MapPin className="contact-icon" />
                  <span>Amsterdam, Nederland</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Naam
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Telefoon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? "Verzenden..." : "Verstuur"}
                </button>
                <p
                  className={`form-status success ${
                    submitStatus === "success" ? "" : "hidden"
                  }`}
                >
                  Bericht succesvol verzonden!
                </p>
                <p
                  className={`form-status error ${
                    submitStatus === "error" ? "" : "hidden"
                  }`}
                >
                  Er is iets misgegaan. Probeer het opnieuw.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
