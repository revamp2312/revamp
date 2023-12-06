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
import Footer from "../components/Footer";
import PartnerWithUsPopout from "../components/PartnerWithUsPopout";
import Header from "../components/Header";
import { useEffect, useState } from "react";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
console.log("home coponent rerendered");
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
console.log(isVisible);
      // Adjust the offset value based on your requirements
      if (offset >= 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
     <Header />
   {isVisible && <NeedHelp />}
      <HeroHome  {...herosectiondata[0]}/>
      <TrustedCompany />
      <Welcome />
      <ExploreCardContainer />
      <TechnologyPartners />
      <PartnerWithUsPopout />
      <OurClient />
      <Events />
      <StartJourney {...ctaHome[0]} />
      <Footer />
     
    </div>
  );
};

export default Home;
