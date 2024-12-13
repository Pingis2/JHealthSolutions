import { useHandleNavigation } from "../utils/navigationUtils";
import { Header } from "../components/header";
import notFoundImage from "../assets/images/notFound/5203299.jpg";

export const NotFound = () => {
  const handleNavigation = useHandleNavigation();

  return (
    <div className="not-found-page">
      <header className="green-header">
        <div className="header-content">
          <ul className="header-list">
            <li onClick={() => handleNavigation("/")} className="home-link">
              Home
            </li>
            <li className="page-title">Not Found Page</li>
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
