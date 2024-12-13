import { useState } from "react";
import logo from "../assets/logo/JHealthSolutions-logo.png";
import { Header } from "../components/header";

export const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <p>JHealthSolutions</p>
        <img
          src={logo}
          alt="JHealthSolutions logo"
          className="jhealt-solutions-logo"
        />
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
                <form>
                  <label>
                    Name:
                    <input type="text" name="name" required />
                  </label>
                  <label>
                    E-Mail:
                    <input type="email" name="email" required />
                  </label>
                  <label>
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
    </div>
  );
};

export default Home;
