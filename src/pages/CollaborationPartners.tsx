import logo from "../assets/logo/JHealthSolutions-logo.png";
import { Header } from "../components/header";
import JessicaImage from "../assets/images/collaboration-partners/jessica-image.png";
import DmytroImage from "../assets/images/collaboration-partners/dmytro-image.png";
import Footer from "../components/Footer";

export const CollaborationPartners = () => {
  return (
    <div className="collboration-partners-container">
      <header className="home-header">
        <div className="header-left">
          <p>JHealthSolutions</p>
          <img
            src={logo}
            alt="JHealthSolutions logo"
            className="jhealt-solutions-logo"
          />
        </div>
        <div className="header-right">
          <p>Collaboration Partners</p>
        </div>
      </header>

      <Header></Header>

      <div className="profiles">
        <section className="profile-jessica">
          <img
            src={JessicaImage}
            alt="image of Jessica Bräun"
            loading="lazy"
          ></img>
          <div className="info-text">
            <h1>Jessica Bräun</h1>
            <h3>Dipl. Ing. (FH) Biotechnologie</h3>
            <h3>Founder JHealthSolutions GmbHG</h3>
          </div>
        </section>

        <section className="profile-dmytro">
          <img
            src={DmytroImage}
            alt="image of Jessica Bräun"
            loading="lazy"
          ></img>
          <div className="info-text">
            <h1>Dmytro Vakulenko</h1>
            <h3>Prof. Dr. Biological Sciences</h3>
            <h3>Founder Innovation in Medicine LLC</h3>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CollaborationPartners;
