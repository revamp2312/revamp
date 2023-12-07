import { Person, call, email } from "../constants/utils"


const ContactPageCTA = () => {

    const style ={
        borderRadius: "24px",
background:  "linear-gradient(135deg, #693ED4 0%, #A31EBE 100%)",
boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)"
}


    
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center px-[70px] py-20">
    <div className="flex justify-center items-center px-[70px] py-12 w-full " style={style}>
    <div className="flex flex-col gap-12 w-6/12">
            <div className="flex flex-col justify-center gap-6 ">
                <div className="relative"><h2 className="text-white">Get started today!</h2>
                <div className="absolute bottom-[-12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="192"
                  height="16"
                  viewBox="0 0 192 16"
                  fill="none"
                >
                  <path
                    d="M2 14C50.0805 7.15593 160.828 -5.3589 190 7.71467"
                    stroke="#EAFF99"
                    strokeWidth="3.47708"
                    strokeLinecap="round"
                  />
                </svg>{" "}
              </div>
                </div>
                <div><p className="text-white">Discover how Blink CX is redefining customer experience, one transformative program at a time.</p></div>
            </div>
            <div>
            <div>
              <button className="py-4 px-5 rounded-lg bg-[#150c2a] text-[#f8fafc] text-center text-[16px] font-bold leading-6 tracking-[0.32px]  border-none ">
                Talk to CX Experts
              </button>
            </div>
          </div>

    </div>
            <div className="w-6/12 flex justify-end">
                <div className="flex flex-col gap-5 w-10/12">
                    <div className="px-4 py-6 bg-white rounded-lg flex items-center gap-4">
                            <div className="w-6">
                                <img className="w-full" src={email}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold text-[#333333]">Email address</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="mailto:hello@blink-digital.com">hello@blink-digital.com</a></div>
                            </div>
                    </div>
                    <div className="px-4 py-6 bg-white rounded-lg flex items-center gap-4">
                            <div className="w-6">
                                <img className="w-full" src={call} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold text-[#333333]">Contact us</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="tel:+632 8 883 5358">+632 8 883 5358 </a></div>
                                <div className="text-base font-normal text-[#333333]">Weekdays 9am to 6pm GMT+8</div>
                            </div>
                    </div>
                    <div className="px-4 py-6 bg-white rounded-lg flex items-center gap-4">
                            <div className="w-6">
                                <img className="w-full" src={Person} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-base font-semibold text-[#333333]">Sales inquiries</div>
                                <div><a className="text-base font-normal text-[#693ED4]" href="tel:+632 (xxxx-xxxx) ">+632 (xxxx-xxxx) </a></div>
                                <div className="text-base font-normal text-[#333333]">Weekdays 9am to 6pm GMT+8</div>

                            </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default ContactPageCTA