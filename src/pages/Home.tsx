import logo from "../assets/logo/JHealthSolutions-logo.png";
import "../styling/home.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <p>JHealthSolutions</p>
        <img
          src={logo}
          alt="JHealthSolutions logo"
          className="jhealt-solutions-logo"
        />
      </header>

      <section className="image-section">
        <div className="text-box-image">
          <h2>Gemeinsam die Zukunft der Medizin gestalten!</h2>
          <p>Sie sind Arzt, Sportmediziner oder eine Klinik?</p>
          <p>Testen Sie unser System und teilen Sie Ihre Erfahrungen!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
