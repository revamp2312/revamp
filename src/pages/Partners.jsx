import EachPartner from "../components/EachPartner"
import OtherPartners from "../components/OtherPartners"
import PartnerHeroSection from "../components/PartnerHeroSection"
import StartJourney from "../components/StartJourney"
import WhatSetsApart from "../components/WhatSetsApart"
import { ctaPartner } from "../constants/ctaBannerdata"

const Partners = () => {
  return (
   <>
    <PartnerHeroSection />
    <EachPartner />
    <OtherPartners />
    <WhatSetsApart />
    <StartJourney   {...ctaPartner[0]}/>
 
   </>
  )
}

export default Partners