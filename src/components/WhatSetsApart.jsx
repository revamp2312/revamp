import { apart } from "../constants/utils"
import "./css/whatsetsapart.css"


const WhatSetsApart = () => {
   
  return (
    <div className="setsapart-container w-full  max-w-[1440px] m-auto  py-12  px-20 flex flex-col gap-[120px]">
        <div className="flex flex-col justify-center items-center gap-6">
          <div><h2>What sets us apart?</h2></div>
          <div className="max-w-[640px] text-center"><p>We don't just collaborate; we co-create, innovating together to reach new frontiers in CX excellence.</p></div>
        </div>

        <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="max-w-[500px] border-dashed border-b-2 border-[#693ED4]"><h3>Data-Powered Engagement</h3></div>
          <div className="max-w-[500px]"><p>Our partnerships drive customer-centric success with advanced CX tech—collecting insights, optimizing communication, and powering CX for satisfaction and excellence.</p></div>
        </div>
        <div className="self-end flex flex-col gap-2">
          <div className="max-w-[500px] border-dashed border-b-2 border-[#693ED4]"><h3>Insights Turned into Action</h3></div>
          <div className="max-w-[500px]"><p>Our partnerships coordinate a journey to customer-centricity: gather insights, turn them into action with project management, and use CX tech effectively.</p></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="max-w-[500px] border-dashed border-b-2 border-[#693ED4]"><h3>CX Evolution in Three Acts</h3></div>
          <div className="max-w-[500px]"><p>Our partnerships harmonize for your CX evolution: tech gathers insights, insights guide next steps, and project management ensures actions align with your CX vision.</p></div>
        </div>
        <div  className="self-end flex flex-col gap-2">
          <div className="max-w-[500px] border-dashed border-b-2 border-[#693ED4]"><h3>The Three Pillars of CX Success</h3></div>
          <div className="max-w-[500px]"><p>In CX success, our partnerships are like three pillars: project management executes, CX tech fuels, and insights inform—driving customer-centric excellence.</p></div>
        </div>
        

        </div>
    </div>
  )
}

export default WhatSetsApart