import AboutUsSubHero from "../components/AboutUsSubHero"
import BlinkStory from "../components/BlinkStory"
import ContactPageCTA from "../components/ContactPageCTA"
import EngagementModelCardContainer from "../components/EngagementModelCardContainer"
import EngagementModelHero from "../components/EngagementModelHero"
import HeroHome from "../components/HeroHome"
import OtherGroups from "../components/OtherGroups"
import OurOffices from "../components/OurOffices"
import Footer from "../components/Footer"
import OurTeam from "../components/OurTeam"
import { herosectiondata } from "../constants/herosectiondata"
import { motion } from "framer-motion"
import Header from "../components/Header"


const AboutUs = () => {
  return (<>
    <Header />
    <motion.div 
    initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  exit={{opacity:0}}>
       <HeroHome  {...herosectiondata[2]}/>
       <AboutUsSubHero />
       <BlinkStory />
       <EngagementModelHero />
       <EngagementModelCardContainer /> 
       <OurTeam />
       <OurOffices />
       <OtherGroups />
       <ContactPageCTA />
       <Footer />
    
    </motion.div>
    </>
  )
}

export default AboutUs