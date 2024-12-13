import { useHandleNavigation } from "../utils/navigationUtils";
import { Header } from "../components/header";
import contactImage from "../assets/images/contact/contact-image.png";

export const Contact = () => {
  const handleNavigation = useHandleNavigation();

  return (
    <div className="contact-page">
      <header className="green-header">
        <div className="header-content">
          <ul className="header-list">
            <li onClick={() => handleNavigation("/")} className="home-link">
              Heim
            </li>
            <li className="page-title">Kontakt</li>
          </ul>
        </div>
      </header>

      <Header></Header>

      <div
        className="background-image"
        style={{
          backgroundImage: `url(${contactImage})`,
        }}
      >
        <div className="text-container">
          <h1>Kontakt</h1>
          <h2>Bitte senden Sie uns Ihre Nachricht an</h2>
          <p>jhealthsolutions.hd@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
