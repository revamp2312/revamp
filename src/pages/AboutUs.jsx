import AboutUsSubHero from "../components/aboutUsPageComponents/AboutUsSubHero";
import BlinkStory from "../components/aboutUsPageComponents/BlinkStory";
import ContactPageCTA from "../components/contactPageComponents/ContactPageCTA";
import EngagementModelCardContainer from "../components/aboutUsPageComponents/EngagementModelCardContainer";
import EngagementModelHero from "../components/aboutUsPageComponents/EngagementModelHero";
import HeroHome from "../components/HeroHome";
import OtherGroups from "../components/aboutUsPageComponents/OtherGroups";
import OurOffices from "../components/aboutUsPageComponents/OurOffices";
import Footer from "../components/Footer";
import OurTeam from "../components/aboutUsPageComponents/OurTeam";
import { motion } from "framer-motion";
import Header from "../components/Header";
import AboutUsHero from "../components/aboutUsPageComponents/AboutUsHero";
import EngagementModelCardSmallDeviceContainer from "../components/aboutUsPageComponents/EngagementModelCardSmallDeviceContainer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <AboutUsHero />
        <AboutUsSubHero />
        <BlinkStory />
        <EngagementModelHero />
        <EngagementModelCardContainer />
        <EngagementModelCardSmallDeviceContainer />
        <OurTeam />
        <OurOffices />
        <OtherGroups />
        <ContactPageCTA />
        <Footer />
      </motion.div>
    </>
  );
};

export default AboutUs;
