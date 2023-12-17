import { createContext, useContext,useState } from "react";

export const planContext=createContext({
})

export function PlanContextProvider({children}){
   
    const [showPop,setShowPop]=useState(false)
    const [activePastEvent, setActivePastEvent] = useState(false);
    const [activeUpcomingEvents, setActiveUpcomingEvents] = useState(true);
    return <planContext.Provider value={{showPop,setShowPop,activePastEvent,setActivePastEvent,activeUpcomingEvents,setActiveUpcomingEvents}}>{children}</planContext.Provider>
}

export function UseplanContext(){
    const {showPop,setShowPop,activePastEvent,setActivePastEvent,activeUpcomingEvents,setActiveUpcomingEvents}=useContext(planContext);
    return {showPop,setShowPop,activePastEvent,setActivePastEvent,activeUpcomingEvents,setActiveUpcomingEvents}
}