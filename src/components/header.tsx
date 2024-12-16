import { useHandleNavigation } from "../utils/navigationUtils";
import "../assets/logo/oranta-logo.png";
import { useEffect, useState } from "react";
import OrantaLogo from "../assets/logo/oranta-logo.png";
import UKFlagIcon from "../assets/icons/uk-flag-icon.png";
import GermanFlagIcon from '../assets/icons/german-flag-icon.png';
import { useTranslation, Trans } from "react-i18next";

export const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(true);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const lngs = {
      en: { nativeName: 'English' },
      de: { nativeName: 'Deutsch' }
    } as const;
  
    const { t, i18n} = useTranslation();

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

  return (
    <>
      <header className="header">
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
                  {t('science-technology')}
                </li>
                <li onClick={() => handleNavigation("/collaboration-partners")}>
                  {t('collaboration-partners')}
                </li>
                <li onClick={() => handleNavigation("/career")}>
                  {t('career')}
                </li>
                <li onClick={() => handleNavigation("/contact")}>
                  {t('contact')}
                </li>
                <li onClick={() => handleNavigation("/privacy")}>
                  Datenschutz
                </li>
                <li onClick={() => handleNavigation("/about-us")}>
                  Impressum
                </li>
                <li>
                  <img
                    src={i18n.resolvedLanguage === 'en' ? GermanFlagIcon : UKFlagIcon} // Opposite flag
                    alt={`Switch to ${i18n.resolvedLanguage === 'en' ? 'German' : 'English'}`}
                    className="language-icon"
                    onClick={() => i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'de' : 'en')} // Switch to the opposite language
                    title={`Switch to ${i18n.resolvedLanguage === 'en' ? 'German' : 'English'}`} // Tooltip
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
                        Science & Technology
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("/collaboration-partners")
                        }
                      >
                        Collaboration Partners
                      </li>
                      <li onClick={() => handleNavigation("/career")}>
                        Karriere
                      </li>
                      <li onClick={() => handleNavigation("/contact")}>
                        Kontakt
                      </li>
                      <li onClick={() => handleNavigation("/privacy")}>
                        Datenschutz
                      </li>
                      <li onClick={() => handleNavigation("/about-us")}>
                        Impressum
                      </li>
                      <li>
                        <img
                          src={UKFlagIcon}
                          alt="icon of the uk flag"
                          className="language-icon"
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
              </>
            )}
          </>
        )}
      </header>
    </>
  );
};
