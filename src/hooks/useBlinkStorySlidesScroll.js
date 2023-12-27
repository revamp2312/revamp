import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const useBlinkStorySlidesScroll = ()=>{
    const section2019 = useRef();
    const section2020 = useRef();
    const section2021 = useRef();
    const section2022 = useRef();
    const section2023 = useRef();
    const navigate = useNavigate();
  
    const handleScroll = (eleRef) => {
      document.getElementById("story-first").scroll({
        top: eleRef.current.offsetTop,
        behavior: "smooth",
      });
    };
  
    const handleGoBack = () => {
      navigate(-1);
    };

    return {handleScroll,handleGoBack,section2019,section2020,section2021,section2022,section2023}
  
}
export default useBlinkStorySlidesScroll