import { Header } from "../components/header";
import scienceImage from "../assets/images/home-page/science-image.jpg";
import { useHandleNavigation } from "../utils/navigationUtils";

export const ScienceTechnology = () => {
  const handleNavigation = useHandleNavigation();

  return (
    <div science-technology-container>
      <header className="green-header">
        <div className="header-content">
          <ul className="header-list">
            <li onClick={() => handleNavigation("/")} className="home-link">
              Home
            </li>
            <li className="page-title">Science & Technology</li>
          </ul>
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
    </div>
  );
};

export default ScienceTechnology;
