import { useTranslation } from "react-i18next";
import image from "../assets/images/contact/contact-image.png";

export const Privacy = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="privacy-container">
        <img src={image} alt="" className="background-image"></img>
        <div className="texts">
          <section className="text-1">
            <h3>{t("privacy-page.headline")}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t("privacy-page.first-text") }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("privacy-page.second-text"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t("privacy-page.third-text") }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("privacy-page.fourth-text"),
              }}
            />
          </section>

          <section className="text-2">
            <p
              dangerouslySetInnerHTML={{ __html: t("privacy-page.fifth-text") }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t("privacy-page.sixth-text") }}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;
