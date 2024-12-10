import logo from "../assets/logo/JHealthSolutions-logo.png";

export const Home = () => {
  return (
    <div>
      <header>
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
