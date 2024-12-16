import { useHandleNavigation } from "../utils/navigationUtils";

export const Footer = () => {
  const handleNavigation = useHandleNavigation();

  return (
    <footer className="footer">
      <div className="footer-left">
        <ul>
          <li onClick={() => handleNavigation("/contact")}>Kontakt</li>
          <li onClick={() => handleNavigation("/privacy")}>Datenschutz</li>
          <li onClick={() => handleNavigation("/about-us")}>Impressum</li>
        </ul>
      </div>

      <div className="footer-right">
        <p>© JHealthSolutions 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
