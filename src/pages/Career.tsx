import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";
import careerImage from "../assets/images/career/career-image.png";

export const Career = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="career-container">
      <header className="green-header">
        <div className="header-content">
          <ul className="header-list">
            <li onClick={() => handleNavigation("/")} className="home-link">
              Home
            </li>
            <li className="page-title">Career</li>
          </ul>
        </div>
      </header>

      <Header></Header>

      <section className="image-text-section">
        <div className="image-container">
          <img src={careerImage} alt="Career Image" className="career-image" />
          <div className="text-overlay">
            Teil des <br /> Teams
          </div>
        </div>

        <div className="text-section">
          <h2>Werde Teil unseres innovativen Teams!</h2>
          <p className="first-text">
            Du möchtest die Zukunft aktiv mitgestalten und gemeinsam mit uns
            Großes erreichen? Dann bist du bei uns genau richtig! Wir suchen
            leidenschaftliche Mitstreiter, die mit uns neue Wege gehen. Sei
            dabei und bringe deine Expertise ein, um mit uns etwas Einzigartiges
            zu schaffen!
          </p>
          <p className="second-text">
            Wir freuen uns über deine <strong>Initiativbewerbung</strong> in den
            Bereichen:
          </p>

          <h3>Mediziner (m/w/d):</h3>
          <ul>
            <li>Du bist Arzt oder Experte im medizinischen Bereich?</li>
            <li>
              Bringe dein Wissen ein, um unsere Vision für eine bessere
              Gesundheitsversorgung zu verwirklichen.
            </li>
            <li>
              Gemeinsam entwickeln wir innovative Lösungen für Patienten, Ärzte
              und die gesamte Branche.
            </li>
          </ul>

          <h4>Softwareentwicklung (m/w/d):</h4>
          <ul>
            <li>
              Du liebst es, Code zu schreiben und komplexe Probleme zu lösen?
            </li>
            <li>
              Hilf uns dabei, modernste Technologien zu nutzen und digitale
              Produkte zu entwickeln, die das Leben verändern.
            </li>
            <li>
              Egal ob Backend, Frontend oder Fullstack - wir freuen uns auf
              deinen kreativen Input!
            </li>
          </ul>

          <p className="third-text">
            So bewirbst du dich: <br /> Sende uns deine Initiativbewerbung mit
            Lebenslauf und einem kurzen Motivationsschreiben an <br />
            jhealthsolutions.hd@gmail.com.
          </p>
          <p className="fourth-text">
            Wir freuen uns darauf, dich kennenzulernen und gemeinsam Großes zu
            bewegen!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Career;
