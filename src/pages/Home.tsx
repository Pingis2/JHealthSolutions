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
    </div>
  );
};

export default Home;
