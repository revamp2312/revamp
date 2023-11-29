import {eventarrow, eventfb, eventlinkedin, eventtwitter, eventyoutube } from "../constants/utils"

const EventsandupdatesCTA = () => {

    const style ={
        borderRadius: "24px",
background:  "linear-gradient(135deg, #693ED4 0%, #A31EBE 100%)",
boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)"
}


    
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center px-[70px] py-20">
    <div className="flex justify-center px-[70px] py-12 w-full " style={style}>
            <div className="flex flex-col justify-center gap-6 w-6/12">
                <div><h2 className="text-white">Stay in the Loop – Follow Us</h2></div>
                <div><p className="text-white">oin us and receive real-time updates, exclusive content, and a deeper connection with BlinkCX</p></div>
            </div>
            <div className="w-6/12 flex justify-end">
                <div className="flex flex-col gap-5 w-10/12">
                    <div className="px-6 py-6 bg-white rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-4">

                            <div className="w-6">
                                <img className="w-full" src={eventfb}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold">Like our Facebook page</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="https://www.facebook.com/blinkdigitalPH">Blink Digital</a></div>
                            </div>
                    </div>
                            <div className="w-[10px]">
                            <img className="w-full" alt="arrrow" src={eventarrow} />
                        </div>
                    </div>
                    <div className="px-6 py-6 bg-white rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-4">

                            <div className="w-6">
                                <img className="w-full" src={eventlinkedin} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold">Connect with us on LinkedIn</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGQWqDNO5amHQAAAYwPvYmoFoRMuGShgIB4SC0hOWrPoqYXizlGYGKhqL-H9q5dIIALKcIeW02jOanmF3ijDyyDpfnrURBvivB9JIKdgnypJm5daFqR5k5EZQucbK4O9TxfyXE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fblink-digital-ph%2Fmycompany%2F">Blink Digital</a></div>
                       
                            </div>
                    </div>
                    <div className="w-[10px]">
                            <img className="w-full" alt="arrrow" src={eventarrow} />
                        </div>
                    </div>
                    <div className="px-6 py-6 bg-white rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-4">

                            <div className="w-6">
                                <img className="w-full" src={eventyoutube} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold">Subscribe to our YouTube channel</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="https://www.youtube.com/@blinkcustomerexperience7943">Blink Customer Experience</a></div>
                               

                            </div>
                    </div>
                    <div className="w-[10px]">
                            <img className="w-full" alt="arrrow" src={eventarrow} />
                        </div>

                    </div>
                    <div className="px-6 py-6 bg-white rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-4">

                            <div className="w-6">
                                <img className="w-full" src={eventtwitter} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold">Follow us on Twitter</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="https://twitter.com/i/flow/login?redirect_after_login=%2FBlinkCX">Blink Digital</a></div>
                               

                            </div>
                        </div>
                        <div className="w-[10px]">
                            <img className="w-full" alt="arrrow" src={eventarrow} />
                        </div>

                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default EventsandupdatesCTA