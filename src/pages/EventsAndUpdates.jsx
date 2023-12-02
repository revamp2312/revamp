import EventCardContainer from "../components/EventCardContainer"
import EventsandupdatesCTA from "../components/EventsandupdatesCTA"
import EventsandupdatesHero from "../components/EventsandupdatesHero"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SocialMedia from "../components/SocialMedia"


const EventsAndUpdates = () => {
  return (
    <div>
     <Header />
    <EventsandupdatesHero />
    <EventCardContainer />
    <SocialMedia />
    <EventsandupdatesCTA  />
    <Footer/>
    </div>
  )
}

export default EventsAndUpdates