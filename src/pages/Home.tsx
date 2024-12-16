import { useState } from "react";
import logo from "../assets/logo/JHealthSolutions-logo.png";
import { Header } from "../components/header";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";

export const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, //Service id
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template_id
        event.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY //Public key
      )
      .then(
        (result) => {
          console.log("E-Mail send", result.text);
          alert("Thank you for your message! We will return soon.");
          event.currentTarget.reset();
        },
        (error) => {
          console.error("Error while sending email", error.text);
          alert("Something went wrong, please try again later.");
        }
      );
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-left">
          <p>JHealthSolutions</p>
          <img
            src={logo}
            alt="JHealthSolutions logo"
            className="jhealt-solutions-logo"
          />
        </div>
        <div className="header-right">
          <p>Home</p>
        </div>
      </header>

      <Header />

      <section className="image-section">
        <div className="text-box-image">
          <h2>Gemeinsam die Zukunft der Medizin gestalten!</h2>
          <p>Sie sind Arzt, Sportmediziner oder eine Klinik?</p>
          <p className="second-text-box-image">
            Testen Sie unser System und teilen Sie Ihre Erfahrungen!
          </p>
          <button className="contact-button" onClick={toggleFormVisibility}>
            Kontaktaufnehmen
          </button>

          {isFormVisible && (
            <div className="modal">
              <div className="modal-content">
                <button className="close-button" onClick={toggleFormVisibility}>
                  &times;
                </button>
                <h3>Kontaktaufnehmen</h3>
                <form onSubmit={handleSubmit}>
                  <label className="label">
                    Name:
                    <input type="text" name="from_name" required />
                  </label>
                  <br />
                  <label className="label">
                    E-Mail:
                    <input type="email" name="from_email" required />
                  </label>
                  <br />
                  <label className="label">
                    Nachricht:
                    <textarea name="message" required />
                  </label>
                  <button className="submit-button" type="submit">
                    Senden
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="text-info-section">
        <h2>
          KI-gestützte Präzision - für Diagnostik, Therapieunterstützung und
          Genesung
        </h2>
        <p>
          Von der Früherkennung bis zur Rehabilitation - Innovation für
          nachhaltige Gesundheit
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
