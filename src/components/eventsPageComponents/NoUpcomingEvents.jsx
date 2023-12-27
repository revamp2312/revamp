import { noUpcomingEvents } from "../../constants/utils"


const NoUpcomingEvents = () => {
  return (
    <div className="max-w-[1440px] m-auto w-full flex justify-center items-center pb-20">
    <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[270px]"><img className="w-full" src={noUpcomingEvents} /></div>
            <div><p className="text-[#666] text-center max-w-[420px]">Our upcoming event page is currently empty. Follow us on social media for future updates!</p></div>
    </div>
    </div>
  )
}

export default NoUpcomingEvents