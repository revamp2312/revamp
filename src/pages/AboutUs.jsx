import AboutUsSubHero from "../components/AboutUsSubHero"
import ContactPageCTA from "../components/ContactPageCTA"
import HeroHome from "../components/HeroHome"
import OurTeam from "../components/OurTeam"
import { herosectiondata } from "../constants/herosectiondata"


const AboutUs = () => {
  return (
    <div>
       <HeroHome  {...herosectiondata[2]}/>
       <AboutUsSubHero />
       <OurTeam />
       <ContactPageCTA />
    
    </div>
  )
}

export default AboutUs