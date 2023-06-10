import EmailTemplates from "./Components/EmailTemplates";
import HeroSection from "./Components/HeroSection";
import Home from "./Components/Home";
import JoinNewsLetter from "./Components/JoinNewsLetter";
import NavBar from "./Components/NavBar";
import TrustedBy from "./Components/TrustedBy";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <HeroSection />
      <EmailTemplates />
      <TrustedBy />
      <JoinNewsLetter />
    </div>
  );
};

export default App;
