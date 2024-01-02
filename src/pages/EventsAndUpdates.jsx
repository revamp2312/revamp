import EventCardContainer from "../components/eventsPageComponents/EventCardContainer"
import EventsandupdatesCTA from "../components/eventsPageComponents/EventsandupdatesCTA"
import EventsandupdatesHero from "../components/eventsPageComponents/EventsandupdatesHero"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SocialMedia from "../components/eventsPageComponents/SocialMedia"
import EventsPageTopBar from "../components/eventsPageComponents/EventsPageTopBar"


const EventsAndUpdates = () => {
  return (
    <div>
     <Header />
    <EventsandupdatesHero />
    <EventsPageTopBar />
    <EventCardContainer />
    <SocialMedia />
    <EventsandupdatesCTA  />
    <Footer/>
    </div>
  )
}

export default EventsAndUpdates