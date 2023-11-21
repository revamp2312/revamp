import AboutUsSubHero from "../components/AboutUsSubHero"
import BlinkStory from "../components/BlinkStory"
import ContactPageCTA from "../components/ContactPageCTA"
import EngagementModelCardContainer from "../components/EngagementModelCardContainer"
import EngagementModelHero from "../components/EngagementModelHero"
import HeroHome from "../components/HeroHome"
import OtherGroups from "../components/OtherGroups"
import OurOffices from "../components/OurOffices"
import OurTeam from "../components/OurTeam"
import { herosectiondata } from "../constants/herosectiondata"


const AboutUs = () => {
  return (
    <div>
       <HeroHome  {...herosectiondata[2]}/>
       <AboutUsSubHero />
       <BlinkStory />
       <EngagementModelHero />
       <EngagementModelCardContainer /> 
       <OurTeam />
       <OurOffices />
       <OtherGroups />
       <ContactPageCTA />
    
    </div>
  )
}

export default AboutUs