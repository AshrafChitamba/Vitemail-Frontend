import EmailTemplates from "./Components/EmailTemplates";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Home />
      <EmailTemplates />
    </Fragment>
  );
};

export default App;
