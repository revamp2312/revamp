import EventCard from "./EventCard"


const UpcomingEventsContainer = () => {
  return (
    <div className="max-w-[1440px] w-full flex justify-center items-center m-auto ">
       <div className="flex flex-wrap gap-x-5 gap-y-12 justify-start items-center ">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
    </div>
  )
}

export default UpcomingEventsContainer