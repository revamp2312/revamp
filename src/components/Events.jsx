import { events } from "../constants/utils"


const Events = () => {
  return (
    <div className="events-container w-full max-w-[1440px] m-auto flex justify-center items-center p-[70px]" style={{background:"linear-gradient(180deg, #f7f5ff 0%, #fff 100%)"}}>
    <div className="event-wrapper w-full flex flex-col gap-14">
    <div className="top flex flex-col gap-2">
        <div className="heading max-w-[750px]"><p>WHAT NEW</p></div>
        <div className="title"><h2>Stay in the Loop: Company Updates, News, Events, and More!</h2></div>
    </div>
        <div className="bottom flex gap-9 rounded">
            <div className="left flex flex-col gap-9 bg-white w-6/12 " style={{boxShadow:"0px 2px 20px 0px rgba(0, 0, 0, 0.05)"}}>
                <div className="imgContainer">
                    <img src={events} />
                </div>
                <div className="eventContainer pt-0 px-5 pb-6 flex flex-col gap-4 border-b-[1px] border-solid border-[#e8e7ee]">
                    <div className="read-time w-max py-1 px-3 flex items-center gap-2 rounded bg-[#f7f5ff] mix-blend-multiply">
                        <div className="tag py-[2px] px-2 bg-white text-[#693ed4] text-center text-xs font-normal leading-5">Event</div>
                         <div className="time text-[#693ed4] text-xs font-normal leading-5">4 min read</div>
                    </div>

                    <div className="date">September 28, 2023 • Thursday, 9:00 AM</div>

                    <div className="event-title"><h3>The CX Next Phil Summit 2023</h3></div>

                    <div className="event-description"><p className="text-[#666] font-normal leading-6">Blink CX and Zendesk are thrilled to join and participate in this year CX Next Phil Summit 2023!</p></div>
                </div>
                <div className="readmore pt-0 px-5 pb-8"><button className="flex h-14 py-2 flex-col justify-center items-center gap-2 text-[#6c52e3] bg-transparent border-none ">Read More</button></div>
            </div>
            <div className="right w-6/12 flex flex-col items-center justify-center gap-6">
            <div className="each-event cursor-pointer w-full flex flex-col gap-4 bg-white py-6 px-[30px]" style={{boxShadow:"0px 2px 20px 0px rgba(0, 0, 0, 0.05)"}}>
                <div className="date text-[#313131] text-sm font-normal">September 22, 2023 • 5 min read</div>
                <div className="heading text-[#1c2436] text-lg font-semibold">Exciting News! Blink CX is Expanding to Singapore!</div>
                <div className="content text-[#5b616e] text-base font-normal ">Breaking News! Blink CX is now in Singapore! </div>
            </div>
            <div className="each-event cursor-pointer w-full flex flex-col gap-4 bg-white py-6 px-[30px]" style={{boxShadow:"0px 2px 20px 0px rgba(0, 0, 0, 0.05)"}}>
                <div className="date text-[#313131] text-sm font-normal">June 1, 2023 • 9 min read</div>
                <div className="heading text-[#1c2436] text-lg font-semibold">CX Trends 2023: Lead the way with immersive CX</div>
                <div className="content text-[#5b616e] text-base font-normal ">Join us in this exclusive event of BlinkCX and Zendesk.</div>
            </div>
            <div className="each-event cursor-pointer w-full flex flex-col gap-4 bg-white py-6 px-[30px]" style={{boxShadow:"0px 2px 20px 0px rgba(0, 0, 0, 0.05)"}}>
                <div className="date text-[#313131] text-sm font-normal">September 22, 2023 • 5 min read</div>
                <div className="heading text-[#1c2436] text-lg font-semibold">The CX Era: Empowering your business through world-class customer experience</div>
                <div className="content text-[#5b616e] text-base font-normal ">Join us in this exclusive event of BlinkCX and Zendesk. </div>
            </div>
          

            </div>
        </div>
    </div>
    </div>
  )
}

export default Events