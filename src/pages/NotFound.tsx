import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import notFoundImage from "../assets/images/notFound/5203299.jpg";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="not-found-page">
      <header className="green-header">
        <div className="header-content">
          <ul className="header-list">
            <li onClick={() => handleNavigation("/")} className="home-link">
              Heim
            </li>
            <li className="page-title">Seite Nicht Gefunden</li>
          </ul>
        </div>
      </header>

      <Header></Header>

      <div className="image-container">
        <img
          src={notFoundImage}
          alt="Page not found"
          className="not-found-image"
        />
      </div>
    </div>
  );
};

export default NotFound;
