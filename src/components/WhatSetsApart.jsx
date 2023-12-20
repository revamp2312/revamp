import { apart } from "../constants/utils"
import "./css/whatsetsapart.css"


const WhatSetsApart = () => {
   
  return (
    <div 
     className="setsapart-container  relative before:opacity-80 desktop:before:opacity-100 z  w-full  max-w-[1440px] m-auto  py-12 px-6 tablet:px-20 flex flex-col gap-[120px]">
        <div className="flex z-10 flex-col justify-center items-center gap-6">
          <div><h2>What sets us apart?</h2></div>
          <div className="max-w-[640px] text-center"><p>We don't just collaborate; we co-create, innovating together to reach new frontiers in CX excellence.</p></div>
        </div>

        <div className="flex z-10 flex-col gap-8 laptop:gap-0">
        <div className="flex flex-col gap-2">
          <div className="max-w-[500px] border-dashed border-b-2 border-[#693ED4]"><h3>Data-Powered Engagement</h3></div>
          <div className="max-w-[500px]"><p>Leveraging data-driven insights, we enable personalized and effective customer interactions by understanding and responding to their needs and preferences </p></div>
        </div>
        <div className="self-end flex flex-col gap-2">
          <div className="max-w-[500px] border-dashed border-b-2 border-[#693ED4]"><h3>Insights Turned into Action</h3></div>
          <div className="max-w-[500px]"><p>We transform data into actionable strategies, using deep customer insights to enhance experiences, set our services apart, and deliver tangible business value.</p></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="max-w-[500px] border-dashed border-b-2 border-[#693ED4]"><h3>CX Evolution in Three Acts</h3></div>
          <div className="max-w-[500px]"><p>Our offerings highlights three key phases - foundational development, strategic integration, and advanced innovation, each pivotal in shaping a dynamic, customer-focused business approach.</p></div>
        </div>
        <div  className="self-end flex flex-col gap-2">
          <div className="max-w-[500px] border-dashed border-b-2 border-[#693ED4]"><h3>The Three Pillars of CX Success</h3></div>
          <div className="max-w-[500px]"><p>In our approach to CX success, project management ensures execution, CX technology provides the necessary tools, and insights guide our strategies, all combining to create a customer-centric experience of excellence.</p></div>
        </div>
        

        </div>
      
    </div>
  )
}

export default WhatSetsApart