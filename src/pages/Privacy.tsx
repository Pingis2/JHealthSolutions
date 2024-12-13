import { Header } from "../components/header";
import image from "../assets/images/contact/contact-image.png";
import { useHandleNavigation } from "../utils/navigationUtils";

export const Privacy = () => {
  const handleNavigation = useHandleNavigation();

  return (
    <>
      <header className="green-header">
        <div className="header-content">
          <ul className="header-list">
            <li onClick={() => handleNavigation("/")} className="home-link">
              Home
            </li>
            <li className="page-title">Privacy</li>
          </ul>
        </div>
      </header>
      <Header></Header>
      <img src={image} alt="" className="background-image"></img>
      <div className="texts">
        <section className="text-1">
          <h3>Datenschutzerklärung</h3>
          <p>
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz
            Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
            Nachfolgend möchten wir Sie darüber informieren, wie wir mit Ihren
            personenbezogenen Daten umgehen, wenn Sie unsere Website nutzen.
          </p>

          <p>
            1. Verantwortlicher Verantwortlich für die Datenverarbeitung auf
            dieser Website ist:
          </p>

          <p>
            JHealthSolutions GmbHG<br></br>
            Bussemergasse 4<br></br>
            69117 Heidelberg
          </p>

          <p>
            2. Erhebung und Verwendung personenbezogener Daten Unsere Website
            dient ausschließlich der Bereitstellung von Informationen über unser
            Unternehmen und unsere Dienstleistungen. Wir speichern keine
            personenbezogenen Daten von Ihnen, solange Sie uns diese nicht
            freiwillig mitteilen.<br></br>
            Kontaktaufnahme:<br></br>
            Wenn Sie uns per E-Mail, Telefon oder über ein Kontaktformular
            kontaktieren, verwenden wir Ihre angegebenen Daten (z. B. Name,
            E-Mail-Adresse, Telefonnummer) ausschließlich zum Zweck der
            Bearbeitung Ihrer Anfrage. Eine Weitergabe dieser Daten an Dritte
            erfolgt nicht. Sobald Ihre Anfrage vollständig bearbeitet ist und
            keine gesetzlichen Aufbewahrungspflichten bestehen, werden die von
            Ihnen mitgeteilten Daten gelöscht.
          </p>
        </section>

        <section className="text-2">
          <p>
            3. Keine Speicherung von Zugriffsdaten<br></br>
            Beim Besuch unserer Website werden keine personenbezogenen Daten
            automatisch gespeichert. Wir verwenden keine Cookies, Tracking-Tools
            oder ähnliche Technologien.<br></br>
            4. Weitergabe von Daten<br></br>
            Ihre personenbezogenen Daten werden von uns weder verkauft noch an
            Dritte weitergegeben.<br></br>
            5. Ihre Rechte<br></br>
            Sie haben das Recht:<br></br>
            Auskunft über die von uns verarbeiteten personenbezogenen Daten zu
            erhalten (Art. 15 DSGVO),<br></br>
            die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO),
            <br></br>
            die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO),<br></br>
            der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DSGVO),
            <br></br>
            eine Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO),
            <br></br>
            Ihre Einwilligung zur Datenverarbeitung jederzeit zu widerrufen
            (Art. 7 Abs. 3 DSGVO).<br></br>
            Zur Ausübung dieser Rechte können Sie uns jederzeit unter den oben
            angegebenen Kontaktdaten erreichen.<br></br>
            6. Änderungen dieser Datenschutzerklärung<br></br>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
            anzupassen, um sie an geänderte rechtliche Rahmenbedingungen
            anzupassen. Die aktuelle Version ist jederzeit auf unserer Website
            verfügbar. Stand: Dezember, 2024
          </p>
          <p>
            Hinweis: Diese Datenschutzerklärung ist nach deutschem Recht
            verfasst und an Websites angepasst, die keine Daten speichern und
            personenbezogene Daten nur zur Kontaktaufnahme nutzen
          </p>
        </section>
      </div>
    </>
  );
};

export default Privacy;
