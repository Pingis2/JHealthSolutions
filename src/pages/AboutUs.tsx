import logo from "../assets/logo/JHealthSolutions-logo.png";
import image from "../assets/images/contact/contact-image.png";
import Footer from "../components/Footer";

export const AboutUs = () => {
  return (
    <div className="about-us-container">
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
          <p>Impressum</p>
        </div>
      </header>

      <img src={image} alt="image of berlin" className="background-image"></img>

      <section className="texts">
        <section className="text-1">
          <p>
            Angaben gemäß § 5 TMG (Telemediengesetz)<br></br>
            JHealthSolutions GmbHG<br></br>
            Bussemergasse 4<br></br>
            69117 Heidelberg
          </p>
          <p>
            Vertreten durch:<br></br>
            Jessica Bräun
          </p>
          <p>
            Kontakt:<br></br>
            E-Mail: jhealthsolution.HD@gmail.com<br></br>
            Eintragung im Handelsregister.<br></br>
            Registergericht: Mannheim<br></br>
            Registernummer: HRB 752149<br></br>
            Steuernummer: 35002/90412<br></br>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a<br></br>
            Umsatzsteuergesetz: DE346601919
          </p>
          <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
          <p>
            Jessica Bräun<br></br>
            Bussemergasse 4<br></br>
            69117 Heidelberg
          </p>
        </section>
        <section className="text-2">
          <p>
            Hinweis zur Online-Streitbeilegung (OS):<br></br>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr Unsere E-Mail-Adresse finden Sie
            oben im Impressum.
          </p>
          <p>
            Haftungsausschluss (Disclaimer):<br></br>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
