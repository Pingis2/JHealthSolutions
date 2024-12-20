import { useTranslation } from "react-i18next";
import scienceImage from "../assets/images/home-page/science-image.jpg";
export const ScienceTechnology = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="science-technology-container">
        <div className="image-container">
          <img
            src={scienceImage}
            alt="Science and Technology"
            className="science-technology-image"
          />
        </div>
        <section className="text-info-section">
          <h2>
            {t("science-technology-page.headline")}
          </h2>
          <section className="operating-principle">
            <h3>{t("science-technology-page.operating-principle.headline")}</h3>
            <ul>
              <li>
                <p>{t("science-technology-page.operating-principle.phase-1")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.operating-principle.phase-2")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.operating-principle.phase-3")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.operating-principle.phase-4")}</p>
              </li>
              </ul>
          </section>
          <section className="technology">
            <h3>{t("science-technology-page.technology.headline")}</h3>

            <h4>{t("science-technology-page.technology.first-text.headline")}</h4>
            <ul>
              <li>
                <p>{t("science-technology-page.technology.first-text.text-1")}</p>
              </li>
            </ul>

            <h4>{t("science-technology-page.technology.first-text.headline")}</h4>
            <ul>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-1")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-2")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-3")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-4")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-5")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-6")}</p>
              </li>
            </ul>

          </section>
          
        </section>
      </div>
    </>
  );
};

export default ScienceTechnology;
