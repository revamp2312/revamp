import { engagementmodeldata } from "../constants/engagementmodeldata"
import EngagementModelCard from "./EngagementModelCard"


const EngagementModelCardContainer = () => {
  return (
    <div className="flex gap-6 justify-center flex-wrap items-start pt-[60px] pb-[280px]  max-w-[1440px] w-full m-auto">
{engagementmodeldata.map((eachcard)=>{
  return <EngagementModelCard key={eachcard.id} {...eachcard}/>
})}
    </div>
  )
}

export default EngagementModelCardContainer