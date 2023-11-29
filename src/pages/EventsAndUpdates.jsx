import EventCardContainer from "../components/EventCardContainer"
import EventsandupdatesCTA from "../components/EventsandupdatesCTA"
import EventsandupdatesHero from "../components/EventsandupdatesHero"
import SocialMedia from "../components/SocialMedia"


const EventsAndUpdates = () => {
  return (
    <div>
    <EventsandupdatesHero />
    <EventCardContainer />
    <SocialMedia />
    <EventsandupdatesCTA  />
    </div>
  )
}

export default EventsAndUpdates