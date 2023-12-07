import { aboutSubHero, activeArrow, cxDownArrrow, inactiveArrow, vision } from "../constants/utils";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




import { useRef } from "react";

const AboutUsSubHero = () => {
  const swiperRef = useRef();
  return (
    <div className="">
         <Swiper
       
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
         modules={[]} className="mySwiper">
        <SwiperSlide>
        <div className="w-full max-w-[1440px] m-auto flex justify-center items-center px-[70px] py-12">
      <div className="flex gap-20 w-full">
        <div className="w-6/12">
          <img src={aboutSubHero} />
        </div>

        <div className="w-6/12 flex justify-center items-center">
          <div className="flex flex-col gap-4 items-start">
            <div>
              <h2>Our Mission</h2>
            </div>
            <div>
                <p className="text-left">At BlinkCX we are here to help your company succeed with data-driven and actionable insights on how to improve your customer experience.</p>
            </div>
            <div>
                <p className="text-left">
                We specialize in helping organizations achieve a ‘customer first’ agenda to drive desired financial and operational outcomes.
                </p>
            </div>
            <div className="flex gap-4 mt-9">
            <div  >
             
                  <div className="w-4">
                  <img className="w-4 " src={inactiveArrow} />

                  </div>
                </div>
                <div className="cursor-pointer" onClick={() => swiperRef.current.slideNext()} >
             
             <div className="w-4">
             <img className="w-4 " src={activeArrow} />

             </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full max-w-[1440px] m-auto flex justify-center items-center px-[70px] py-12">
      <div className="flex gap-20 w-full">
        <div className="w-6/12">
          <img src={vision} />
        </div>

        <div className="w-6/12 flex justify-center items-center">
          <div className="flex flex-col gap-4  items-start">
            <div>
              <h2>Our Vision</h2>
            </div>
            <div>
                <p className="text-left">To help you maximize the value from your CX technology investments at every step of the lifecycle and accelerate your success.</p>
            </div>
            <div className="flex gap-4 mt-9">
            <div className="cursor-pointer" onClick={() => swiperRef.current.slidePrev()} >
             
                  <div className="w-4">
                  <img className="w-4 rotate-[180deg]" src={activeArrow} />

                  </div>
                </div>
                <div  >
             
             <div className="w-4">
             <img className="w-4 rotate-[180deg]" src={inactiveArrow} />

             </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
 
  );
};

export default AboutUsSubHero;
