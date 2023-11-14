import HeroHome from "../components/HeroHome";
import "../components/css/herohome.css";
import ExploreCardContainer from "../components/ExploreCardContainer";
import TechnologyPartners from "../components/TechnologyPartners";
import OurClient from "../components/OurClient";
import TrustedCompany from "../components/TrustedCompany";
import Welcome from "../components/Welcome";
import StartJourney from "../components/StartJourney";
import NeedHelp from "../components/NeedHelp";
import Events from "../components/Events";
import { herosectiondata } from "../constants/herosectiondata";
import { ctaHome } from "../constants/ctaBannerdata";
const Home = () => {
  return (
    <>
    <NeedHelp />
      <HeroHome  {...herosectiondata[0]}/>
      <TrustedCompany />
      <Welcome />
      <ExploreCardContainer />
      <TechnologyPartners />
      <OurClient />
      <Events />
      <StartJourney {...ctaHome[0]} />
     
    </>
  );
};

export default Home;
