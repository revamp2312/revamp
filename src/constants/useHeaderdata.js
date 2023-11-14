import { useState } from "react";

export const useHeaderdata = () => {
  const [showSubHeader, setShowSubHeade] = useState(false);
  const [event, setEvent] = useState(false);
  const [about, setAbout] = useState(true);

  const mouseOnEvent = () => {
    setEvent(true);

    setAbout(false);
  };
  const mouseOnAbout = () => {
    setEvent(false);

    setAbout(true);
  };
 
return {showSubHeader,setShowSubHeade,event,about,mouseOnEvent,mouseOnAbout,}

};
