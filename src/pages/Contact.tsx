import logo from "../assets/logo/JHealthSolutions-logo.png";
import { Header } from "../components/header";
import contactImage from "../assets/images/contact/contact-image.png";
import Footer from "../components/Footer";

export const Contact = () => {
  return (
    <div className="contact-page">
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
          <p>Kontakt</p>
        </div>
      </header>

      <Header></Header>

      <div className="contact-container">
        <img className="background-image" src={contactImage} alt="image of berlin"/>
        <div className="text-container">
          <h1>Kontakt</h1>
          <h2>Bitte senden Sie uns Ihre Nachricht an</h2>
          <p>jhealthsolutions.hd@gmail.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
