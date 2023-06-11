import EmailTemplates from "../Components/EmailTemplates";
import HeroSection from "../Components/HeroSection";
import Home from "../Components/Home";
import JoinNewsLetter from "../Components/JoinNewsLetter";
import TrustedBy from "../Components/TrustedBy";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <HeroSection />
      <EmailTemplates />
      <TrustedBy />
      <JoinNewsLetter />
    </div>
  );
};

export default LandingPage;
