import AllServices from "../components/servicePageComponents/AllServices";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import StartJourney from "../components/StartJourney";
import { ctaService } from "../constants/ctaBannerdata";
import { herosectiondata } from "../constants/herosectiondata";
import { Framework } from "../constants/utils";

const Services = () => {
  return (
    <div>
      <Header />
      <HeroHome {...herosectiondata[1]} />
      <AllServices />
      <div className="w-full max-w-[1440px] m-auto">
        <img className="w-full" src={Framework} />
      </div>
      <StartJourney {...ctaService[0]} />
      <Footer />
    </div>
  );
};

export default Services;
