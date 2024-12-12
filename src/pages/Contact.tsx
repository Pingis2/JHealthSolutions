import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import contactImage from "../assets/images/contact/contact-image.png";

export const Contact = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="contact-page">
      <header className="green-header">
        <div className="header-content">
          <ul className="header-list">
            <li onClick={() => handleNavigation("/")} className="home-link">
              Home
            </li>
            <li className="page-title">Contact</li>
          </ul>
        </div>
      </header>

      <Header></Header>

      <div
        className="background-image"
        style={{
          backgroundImage: `url(${contactImage})`,
        }}
      ></div>
    </div>
  );
};

export default Contact;
