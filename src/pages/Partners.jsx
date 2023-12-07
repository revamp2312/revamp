import EachPartner from "../components/EachPartner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import OtherPartners from "../components/OtherPartners"
import PartnerHeroSection from "../components/PartnerHeroSection"
import WhatSetsApart from "../components/WhatSetsApart"
import { ctaPartner } from "../constants/ctaBannerdata"
import PartnerCTA from "../components/PartnerCTA"

const Partners = () => {
  return (
   <>
    <Header />
    <PartnerHeroSection />
    <EachPartner />
    <OtherPartners />
    <WhatSetsApart />
    <PartnerCTA  {...ctaPartner[0]}/>
    <Footer />
   </>
  )
}

export default Partners