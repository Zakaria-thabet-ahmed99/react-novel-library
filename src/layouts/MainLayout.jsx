import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

const MainLayout = ({favorites}) => {
  return (
    <>
      <Navbar favorites={favorites} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;