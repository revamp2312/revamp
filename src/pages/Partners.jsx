import EachPartner from "../components/partnersPageComponents/EachPartner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import OtherPartners from "../components/partnersPageComponents/OtherPartners"
import PartnerHeroSection from "../components/partnersPageComponents/PartnerHeroSection"
import WhatSetsApart from "../components/partnersPageComponents/WhatSetsApart"
import { ctaPartner } from "../constants/ctaBannerdata"
import PartnerCTA from "../components/partnersPageComponents/PartnerCTA"

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