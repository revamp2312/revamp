import AllServices from "../components/AllServices"
import HeroHome from "../components/HeroHome"
import StartJourney from "../components/StartJourney";
import { ctaService } from "../constants/ctaBannerdata";
import { herosectiondata } from "../constants/herosectiondata"
import { Framework } from "../constants/utils";

const Services = () => {
  return (
    <div>
         <HeroHome  {...herosectiondata[1]}/>
         <AllServices />
         <div className="w-full max-w-[1440px] m-auto">  
          <img className="w-full" src={Framework} />
         </div>
         <StartJourney {...ctaService[0]} />
    </div>
  )
}

export default Services