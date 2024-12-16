import { Header } from "../components/header";
import scienceImage from "../assets/images/home-page/science-image.jpg";
import logo from "../assets/logo/JHealthSolutions-logo.png";
import Footer from "../components/Footer";

export const ScienceTechnology = () => {
  return (
    <div science-technology-container>
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
          <p>Science & Technology</p>
        </div>
      </header>

      <Header></Header>

      <div className="image-container">
        <img
          src={scienceImage}
          alt="Science and Technology"
          className="science-technology-image"
        />
      </div>

      <Footer />
    </div>
  );
};

export default ScienceTechnology;
