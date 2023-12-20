import React from 'react'
import PastEventCard from './PastEventCard'
import { pastevents } from '../constants/pastevents'

const PastEventContainer = () => {
  return (
    <div className="max-w-[1440px] w-full flex justify-center items-center m-auto ">
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-5 gap-y-12   ">
    {
      pastevents.map((eachEvent,index)=>{
        return <PastEventCard key={index} {...eachEvent}/>
      })
    }


       </div>
 </div>
  )
}

export default PastEventContainer