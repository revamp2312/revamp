import { engagementmodeldata } from "../../constants/engagementmodeldata";
import EngagementModelCard from "./EngagementModelCard";
import EngagementModelCardSmallDevice from "./EngagementModelCardSmallDevice";

const EngagementModelCardContainer = () => {
  return (
    <div  style={{background: "linear-gradient(180deg, #F7F5FF 46.87%, #FFF 100%), #FFF"}} className="engagement-model-container-BigDevice flex gap-6 justify-center flex-wrap items-start pt-[60px] pb-[280px]  max-w-[1440px] w-full m-auto">
      {engagementmodeldata.map((eachcard) => {
        return <EngagementModelCard key={eachcard.id} {...eachcard} />;
      })}
     
    </div>
  );
};

export default EngagementModelCardContainer;
