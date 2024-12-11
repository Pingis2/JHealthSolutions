export const Home = () => {
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

      <section className="image-section">
        <div className="text-box-image">
          <h2>Gemeinsam die Zukunft der Medizin gestalten!</h2>
          <p>Sie sind Arzt, Sportmediziner oder eine Klinik?</p>
          <p className="second-text-box-image">
            Testen Sie unser System und teilen Sie Ihre Erfahrungen!
          </p>
          <button className="contact-button">Kontaktaufnehmen</button>
          {/*Lägg till formulär som pop up */}
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
