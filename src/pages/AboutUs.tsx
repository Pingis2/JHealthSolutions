import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import image from '../assets/images/contact/contact-image.png';

export const AboutUs = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  
  return <>
    <header className="green-header">
      <div className="header-content">
        <ul className="header-list">
          <li onClick={() => handleNavigation("/")} className="home-link">
            Heim
          </li>
          <li className="page-title">Impressum</li>
        </ul>
      </div>
    </header>
    <Header></Header>

    <img src={image} alt="image of berlin" className="background-image"></img>

    <section className="texts">
      <section className="text-1">
        <p>Angaben gemäß § 5 TMG (Telemediengesetz)<br></br>
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
        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </p>
        <p>
          Jessica Bräun<br></br>
          Bussemergasse 4<br></br>
          69117 Heidelberg
        </p>
      </section>
      <section className="text-2">
        <p>
          Hinweis zur Online-Streitbeilegung (OS):<br></br>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Haftungsausschluss (Disclaimer):<br></br>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
      </section>
    </section>
  </>;
};

export default AboutUs;
