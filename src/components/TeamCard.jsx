import { useState } from "react";
import { teamcardlinkedin, teamcardm } from "../constants/utils";

const TeamCard = (props) => {
  const [firstLayerOpen, setFirstLayerOpen] = useState(false);

   const handleshowdetail=()=>{
    setFirstLayerOpen(true)
   }
   const handlehidedetail=()=>{
    setFirstLayerOpen(false)
   }
  return (
    <div onMouseEnter={handleshowdetail} onMouseLeave={handlehidedetail} className=" w-[287px] overflow-hidden  cursor-pointer relative py-8 px-[30px] flex justify-center items-center"style={{boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)"}} >
      <div className="flex flex-col gap-6 z-10 justify-center items-center ">
        <div className="max-w-[160px]">
          <img className="w-full" src={teamcardm} />
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-[#1C1548] font-semibold text-[19px] leading-7">{props.name}</div>
          <div className="text-[#6C52E3] text-xs font-normal text-center">{props.position}</div>

          
        </div>
      </div>

      <div className=" w-full h-full flex justify-center items-center rounded border-[1px] border-teamcard-border border-solid bg-teamcard-rgba absolute z-20 top-[0%] left-0 py-8 px-[30px] "  style={
          firstLayerOpen
            ? {
                transition: "transform 0.5s ease 0s",
                transform: "translateY(0px)",
                boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)"
              }
            : {
                transition: "transform 0.5s ease 0s",
                transform: "translateY(100%)",
                boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)"
              }
        }>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-[#1C1548] font-semibold text-[19px] leading-7">{props.name}</div>
          <div className="text-[#6C52E3] text-xs font-normal text-center">{props.position}</div>
          </div>
          <div><p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem </p></div>
        </div>
      </div>
     <div className="absolute right-0 top-0 w-10">
      <img className="w-full" src={teamcardlinkedin} />
     </div>
      
    </div>
    
  );
};

export default TeamCard;
