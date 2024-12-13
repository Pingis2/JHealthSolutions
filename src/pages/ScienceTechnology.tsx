import { Header } from "../components/header";
import scienceImage from "../assets/images/home-page/science-image.jpg";
import { useNavigate } from "react-router-dom";

export const ScienceTechnology = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div science-technology-container>
      <header className="green-header">
        <div className="header-content">
          <ul className="header-list">
            <li onClick={() => handleNavigation("/")} className="home-link">
              Heim
            </li>
            <li className="page-title">Wissenschaft & Technologie</li>
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
