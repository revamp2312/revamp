import "../css/welcome.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { teammember1, teammember2 } from "../constants/utils";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { welcomedata } from "../../constants/welcomedata";
import WelcomeSlides from "./WelcomeSlides";

const Welcome = () => {
  const [showname, setShowname] = useState(false);

  

  return (
    <div className="welcome-container w-full max-w-[1440px] m-auto flex justify-center items-center py-16 px-6 tablet:px-14 laptop:px-[70px]">
      <div className="welcome-wrapper w-full flex flex-col gap-9 laptop:flex-row laptop:gap-0">
        <div className="left w-full laptop:w-[60%] flex flex-col gap-16 items-center laptop:items-start ">
          <div className="upper flex flex-col gap-2 max-w-[600px] items-center text-center laptop:items-start laptop:text-left  ">
            <div className="title text-[#666666] uppercase">welcome to blink cx</div>
            <div className="heading">
              <h2>Curious about the people and passion that power Blink CX?</h2>
            </div>
            <div className="description">
              <p className="tect-[#666666]">
                Meet our team and uncover the core of our customer-centric
                approach.
              </p>
            </div>
          </div>
          <div className="lower">
            <div className="welcome-cta">
              <button
              style={{background:"linear-gradient(135deg, #693ed4 0%, #a31ebe 100%)"}}
              className="cursor-pointer text-[#f8fafc] text-center text-base font-bold capitalize tracking-[-0.32px] px-6 py-4 rounded-lg border-[1px] border-solid border-[#fff]"
                onMouseOver={() => {
                  setShowname(true);
                }}
              >
                Learn more about us
              </button>
            </div>
          </div>
        </div>
        <div className="right w-full laptop:w-[40%] ">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            loop={true}
            effect="slide"
            speed={8000}
            centeredSlides={true}
            autoplay={{
              delay: 0,
             
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
          {
            welcomedata.map((member,index)=>{
              return(
                <SwiperSlide key={index}>
                 <WelcomeSlides {...member} />
            </SwiperSlide>
              )
            })
          }
        
          
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
