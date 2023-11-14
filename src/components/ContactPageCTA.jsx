import { Person, call, email } from "../constants/utils"


const ContactPageCTA = () => {

    const style ={
        borderRadius: "24px",
background:  "linear-gradient(135deg, #693ED4 0%, #A31EBE 100%)",
boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)"
}


    
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center px-[70px] py-20">
    <div className="flex justify-center px-[70px] py-12 w-full " style={style}>
            <div className="flex flex-col justify-center gap-6 w-6/12">
                <div><h2 className="text-white">Get started today!</h2></div>
                <div><p className="text-white">Discover how Blink CX is redefining customer experience, one transformative program at a time.</p></div>
            </div>
            <div className="w-6/12 flex justify-end">
                <div className="flex flex-col gap-5 w-10/12">
                    <div className="px-4 py-6 bg-white rounded-lg flex items-center gap-4">
                            <div className="w-6">
                                <img className="w-full" src={email}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold">Email address</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="mailto:hello@blink-digital.com">hello@blink-digital.com</a></div>
                            </div>
                    </div>
                    <div className="px-4 py-6 bg-white rounded-lg flex items-center gap-4">
                            <div className="w-6">
                                <img className="w-full" src={call} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold">Contact us</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="tel:+632 8 883 5358">+632 8 883 5358 </a></div>
                                <div className="text-base font-normal">Weekdays 9am to 6pm GMT+8</div>
                            </div>
                    </div>
                    <div className="px-4 py-6 bg-white rounded-lg flex items-center gap-4">
                            <div className="w-6">
                                <img className="w-full" src={Person} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold">Sales inquiries</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="tel:+632 8 883 5358">+632 8 883 5358 </a></div>
                                <div className="text-base font-normal">Weekdays 9am to 6pm GMT+8</div>

                            </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default ContactPageCTA