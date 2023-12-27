import { useState } from "react";

export const useHeaderdata = () => {
  const [showSubHeader, setShowSubHeade] = useState(false);
  const[showSideBar,setShowSideBar] =useState(false)
  const[showCompanySubOption,setShowCompanySubOption] =useState(false)
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
  const handleShowSideBar=()=>{
    setShowSideBar(true)
  }
  const handleHideSideBar=()=>{
    setShowSideBar(false)
  }
  const handleShowCompanySubOption=()=>{
    setShowCompanySubOption(!showCompanySubOption)
  }

return {showSubHeader,setShowSubHeade,event,about,mouseOnEvent,mouseOnAbout,showSideBar,handleShowSideBar,handleHideSideBar,showCompanySubOption,handleShowCompanySubOption}

};
