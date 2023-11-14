import { teamcardm } from "../constants/utils";

const TeamCard = (props) => {
  return (
    <div className="max-w-[287px] py-8 px-[30px] flex justify-center items-center"style={{boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)"}} >
      <div className="flex flex-col gap-6">
        <div>
          <img src={teamcardm} />
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-[#1C1548] font-semibold text-[19px] leading-7">{props.name}</div>
          <div className="text-[#6C52E3] text-xs font-normal text-center">{props.position}</div>

          
        </div>
      </div>
     
      
    </div>
    
  );
};

export default TeamCard;
