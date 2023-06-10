import EmailTemplates from "./Components/EmailTemplates";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="mb-[70px]">
      <NavBar />
      <Home />
      <EmailTemplates />
    </div>
  );
};

export default App;
