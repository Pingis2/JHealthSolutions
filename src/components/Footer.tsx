import { useTranslation } from "react-i18next";
import { useHandleNavigation } from "../utils/navigationUtils";

export const Footer = () => {
  const handleNavigation = useHandleNavigation();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-left">
        <ul>
          <li onClick={() => handleNavigation("/contact")}>
            {t("footer.contact")}
          </li>
          <li onClick={() => handleNavigation("/privacy")}>
            {t("footer.privacy")}
          </li>
          <li onClick={() => handleNavigation("/about-us")}>
            {t("footer.about-us")}
          </li>
        </ul>
      </div>

      <div className="footer-right">
        <p>© JHealthSolutions 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
