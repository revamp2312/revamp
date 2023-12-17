import "./css/welcome.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { teammember1, teammember2 } from "../constants/utils";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { welcomedata } from "../constants/welcomedata";
import WelcomeSlides from "./WelcomeSlides";

const Welcome = () => {
  const [showname, setShowname] = useState(false);

  

  return (
    <div className="welcome-container">
      <div className="welcome-wrapper">
        <div className="left">
          <div className="upper">
            <div className="title text-[#666666]">welcome to blink cx</div>
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
                onMouseOver={() => {
                  setShowname(true);
                }}
              >
                Learn more about us
              </button>
            </div>
          </div>
        </div>
        <div className="right">
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
