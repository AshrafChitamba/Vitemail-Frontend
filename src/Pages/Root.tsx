import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Fragment } from "react";

const Root = () => {
  return (
    <Fragment>
      <NavBar />

      {/* children outlet */}
      <Outlet />

      <Footer />
    </Fragment>
  );
};

export default Root;
