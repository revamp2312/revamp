import { useState } from "react";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";
import UpcomingEventsContainer from "./UpcomingEventsContainer";
import PastEventContainer from "./PastEventContainer";
import { UseplanContext } from "../../constants/useContext";
import NoUpcomingEvents from "./NoUpcomingEvents";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent } from "../../constants/slices/eventsSlice";
import WebinarContainer from "./WebinarContainer";
import NewsContainer from "./NewsContainer";

const EventCardContainer = () => {
const eventData =useSelector((store)=>store.events)
const dispatch=useDispatch()
const isOpen=eventData.Dropdown
const activePastEvent =eventData.pastEvents
const activeUpcomingEvents =eventData.upcomingEvents
const activeWebinar=eventData.webinars
const activeNews=eventData.news


  return (
    <div className="max-w-[1440px] w-full flex justify-center items-center m-auto p-6 tablet:p-12">
      <div className="flex flex-col justify-center items-center gap-12 w-full">
        

       {(activePastEvent || activeUpcomingEvents) && <div
          className="flex flex-col gap-12 transition-all duration-400 w-full"
          style={isOpen ? { paddingTop: "120px" } : { paddingTop: "0px" }}
        >
          <div className="text-[31px] font-semibold flex flex-col tablet:flex-row gap-6">
            <div
              onClick={()=>{dispatch(updateEvent({ upcomingEvents:false,pastEvents:true,news:false,webinars:false}))}}
              style={activePastEvent ? { color: "#693ED4" } : { color: "#CCC" }}
              className="hover:!text-[#693ED4] cursor-pointer  relative "
            >
              Past Events
              <div
                style={
                  activePastEvent
                    ? { background: "#693ED4" }
                    : { background: "transparent" }
                }
                className="absolute left-0 bottom-[-8px] bg-[#693ED4] h-[3px] w-full "
              ></div>
            </div>

            <div
              onClick={()=>{dispatch(updateEvent({ upcomingEvents:true,pastEvents:false,news:false,webinars:false}))}}
              style={
                activeUpcomingEvents ? { color: "#693ED4" } : { color: "#CCC" }
              }
              className="hover:!text-[#693ED4] cursor-pointer relative "
            >
              Upcoming Events
              <div
                style={
                  activeUpcomingEvents
                    ? { background: "#693ED4" }
                    : { background: "transparent" }
                }
                className="absolute left-0 bottom-[-8px] bg-[#693ED4] h-[3px] w-full "
              ></div>
            </div>
          </div>
          {activePastEvent && <PastEventContainer />}
          {activeUpcomingEvents && <NoUpcomingEvents />}
        </div>}
        {activeWebinar && <WebinarContainer />}
        {activeNews && <UpcomingEventsContainer />}
      </div>
    </div>
  );
};

export default EventCardContainer;
