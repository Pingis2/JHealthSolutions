import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import Footer from "../components/Footer";

export const Layout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
