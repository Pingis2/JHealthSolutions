import { useHandleNavigation } from "../utils/navigationUtils";
import "../assets/logo/oranta-logo.png";
import { useEffect, useState } from "react";
import OrantaLogo from "../assets/logo/oranta-logo.png";
import UKFlagIcon from "../assets/icons/uk-flag-icon.png";
import GermanFlagIcon from "../assets/icons/german-flag-icon.png";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo/JHealthSolutions-logo.png";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(true);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [pageName, setPageName] = useState<string>("");

  const { t, i18n } = useTranslation();
  const location = useLocation();

  const pageNameMapping: { [key: string]: string } = {
    "/": "Home",
    "/science-technology": "Science & Technology",
    "/collaboration-partners": "Collaboration Partners",
    "/career": "Karriere",
    "/about-us": "Impressum",
    "/privacy": "Datenschutz",
    "/contact": "Kontakt",
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuDisplay(true);
        setBurgerOpen(false);
      } else {
        setMenuDisplay(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = useHandleNavigation();

  const handleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath in pageNameMapping) {
      setPageName(pageNameMapping[currentPath as keyof typeof pageNameMapping]);
    } else {
      setPageName("Page Not Found");
    }
  }, [location]);

  return (
    <>
      <section className="home-header">
        <div className="header-left">
          <p>JHealthSolutions</p>
          <img
            src={logo}
            alt="JHealthSolutions logo"
            className="jhealt-solutions-logo"
          />
        </div>
        <div className="header-right">
          <p>{pageName}</p>
        </div>
      </section>

      <section className="header">
        {menuDisplay && (
          <>
            <img
              src={OrantaLogo}
              alt="logo of oranta"
              className="header-logo"
            ></img>
            <nav>
              <ul className="nav-items">
                <li onClick={() => handleNavigation("/")}>Home</li>
                <li onClick={() => handleNavigation("/science-technology")}>
                  {t("science-technology")}
                </li>
                <li onClick={() => handleNavigation("/collaboration-partners")}>
                  {t("collaboration-partners")}
                </li>
                <li onClick={() => handleNavigation("/career")}>
                  {t("career")}
                </li>
                <li>
                  <img
                    src={
                      i18n.resolvedLanguage === "en"
                        ? GermanFlagIcon
                        : UKFlagIcon
                    }
                    alt={`Switch to ${
                      i18n.resolvedLanguage === "en" ? "German" : "English"
                    }`}
                    className="language-icon"
                    onClick={() =>
                      i18n.changeLanguage(
                        i18n.resolvedLanguage === "en" ? "de" : "en"
                      )
                    }
                    title={`Switch to ${
                      i18n.resolvedLanguage === "en" ? "German" : "English"
                    }`}
                  />
                </li>
              </ul>
            </nav>
          </>
        )}

        {!menuDisplay && (
          <>
            <img
              src={OrantaLogo}
              alt="logo of oranta"
              className="header-logo"
            ></img>
            <div className="burger" onClick={handleBurger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {burgerOpen && (
              <>
                <div className="burger-menu">
                  <nav>
                    <ul className="nav-items">
                      <li onClick={() => handleNavigation("/")}>Home</li>
                      <li
                        onClick={() => handleNavigation("/science-technology")}
                      >
                        {t("science-technology")}
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("/collaboration-partners")
                        }
                      >
                        {t("collaboration-partners")}
                      </li>
                      <li onClick={() => handleNavigation("/career")}>
                        {t("career")}
                      </li>
                      <li>
                        <img
                          src={
                            i18n.resolvedLanguage === "en"
                              ? GermanFlagIcon
                              : UKFlagIcon
                          }
                          alt={`Switch to ${
                            i18n.resolvedLanguage === "en"
                              ? "German"
                              : "English"
                          }`}
                          className="language-icon"
                          onClick={() =>
                            i18n.changeLanguage(
                              i18n.resolvedLanguage === "en" ? "de" : "en"
                            )
                          }
                          title={`Switch to ${
                            i18n.resolvedLanguage === "en"
                              ? "German"
                              : "English"
                          }`}
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
};
