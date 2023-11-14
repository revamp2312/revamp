import { useState } from "react";
import { ContactPageHero, Philippinesflag, Singaporeflag, contactPagemeshBG } from "../constants/utils";
import "./css/contacthero.css";

const ContactHeroSection = () => {
const [showSingapore,setShowSingapore]=useState(false)
const [showFilipino,setShowFilipino]=useState(false)


const handleShowSingapore=()=>{
  setShowSingapore(true)
}
const handleHideSingapore=()=>{
  setShowSingapore(false)
}
const handleShowFilipino=()=>{
  setShowFilipino(true)
}
const handleHideFilipino=()=>{
  setShowFilipino(false)
}



  return (
    <div className=" w-full max-w-[1440px] m-auto flex justify-center items-center  pb-20 ">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex w-full contact-hero-container">
          <div className="w-6/12 flex flex-col gap-6 py-20 pl-[70px]">
            <div className="flex  flex-col gap-2">
              <div>
                <p>CONTACT US</p>
              </div>
              <div>
                <h1>Get in Touch with Blink CX</h1>
              </div>
            </div>
            <div>
              <p>
                Get in touch for personalized support, service information, or
                any inquiries. We are excited to assist you on your CX journey.
              </p>
            </div>
          </div>
          <div className="w-6/12 relative">
            <img src={ContactPageHero} />

            <div onMouseOver={handleShowSingapore}  onMouseLeave={handleHideSingapore} className="singapore cursor-pointer absolute flex justify-center items-center left-[270px] bottom-[160px] w-8 bg-[#BDAAEC] h-8 rounded-[50%]">
              <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
            </div>
            <div className="singapore-name absolute left-[308px] bottom-[160px] ">
              <p className="text-[#693ED4] font-semibold leading-6">
                Singapore
              </p>
            </div>
          { showSingapore && <div className="singapore-address rounded-md  flex absolute left-[225px] bottom-[210px] gap-4 bg-white max-w-[339px] py-6 px-4 justify-center items-center">
                <div><img src={Singaporeflag} /></div>
                <div className="text-xs font-normal">10 Anson Road #22-02 International Plaza Singapore (079903)</div>
            </div>}
            <div onMouseOver={handleShowFilipino}  onMouseLeave={handleHideFilipino} className="filipino cursor-pointer absolute top-[140px] right-[208px] flex justify-center items-center w-8 bg-[#BDAAEC] h-8 rounded-[50%]">
              <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
            </div>
            <div className="filipino-name absolute top-[140px] right-[20px]">
              <p className="text-[#693ED4] font-semibold leading-6">
                Manila, Philippines
              </p>
            </div>
           { showFilipino && <div className="filipino-address rounded-md flex absolute top-[30px] right-[20px] gap-4 bg-white max-w-[339px] py-6 px-4 justify-center items-center">
                <div><img src={Philippinesflag} /></div>
                <div className="text-xs font-normal">19th Floor, Marco Polo Ortigas Manila, Sapphire Road, Ortigas Centre, Pasig City Manila, 1600, Philippines</div>
            </div>}
          </div>
        </div>
        <div className="flex gap-6 mt-[-70px]">
          <div
            className="max-w-[420px] px-6 py-8 bg-white rounded-2xl flex flex-col gap-12 z-10"
            style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)"}}
          >
            <div>
              <p>
                Reach out for personalized support, service info, or any
                questions.
              </p>
            </div>
            <div className="flex justify-center items-center bg-[#693ED4] py-4 px-6 cursor-pointer  rounded-lg">
              <button className="text-white font-semiboldbold text-[16px]">
                Submit an inquiry
              </button>
            </div>
          </div>
          <div
            className="max-w-[420px] px-6 py-8 bg-white rounded-2xl flex flex-col gap-12 z-10"
            style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <div>
              <p>Already a client? Let’s get you the help you need.</p>
            </div>
            <div className="flex justify-center items-center bg-black py-4 px-6 cursor-pointer rounded-lg">
              <button className="text-white font-semiboldbold text-[16px]">
                Go to help center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
