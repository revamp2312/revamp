import React from 'react'
import { engagementmodeldata } from '../../constants/engagementmodeldata';
import EngagementModelCardSmallDevice from './EngagementModelCardSmallDevice';

const EngagementModelCardSmallDeviceContainer = () => {
  return (
    <div style={{background: "linear-gradient(180deg, #F7F5FF 46.87%, #FFF 100%), #FFF"}} className='engagement-model-container-smallDevice  flex-col gap-0 tablet:flex-row tablet:gap-12 flex-wrap hidden justify-center items-center px-6 pt-12 tablet:px-14 laptop:px-[70px] '>
          {engagementmodeldata.map((eachcard) => {
        return <EngagementModelCardSmallDevice key={eachcard.id} {...eachcard} />;
      })}
    </div>
  )
}

export default EngagementModelCardSmallDeviceContainer