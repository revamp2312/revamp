import {  teamdataFirstRow, teamdataSecondRow } from "../constants/teamdata"
import TeamCard from "./TeamCard"

const OurTeam = () => {
  return (
    <div className="w-full m-auto max-w-[1440px] flex justify-center items-center py-20 px-[70px]">
        <div className="flex flex-col gap-20">
                <div className="flex justify-center items-center"><h2>Our Team</h2></div>
                <div className="flex flex-col gap-6">

                <div className="flex flex-wrap gap-6 justify-center items-center">
                    {teamdataFirstRow.map((each,index)=>{
                        return < TeamCard key={index} {...each}/>
                    })}
                </div>
                <div className="flex flex-wrap gap-6 justify-center items-center">
                    {teamdataSecondRow.map((each,index)=>{
                        return < TeamCard key={index} {...each}/>
                    })}
                </div>

                </div>
        </div>
    </div>
  )
}

export default OurTeam