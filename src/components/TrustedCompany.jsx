import {
  pldt,
  pagcor,
  globe,
  paramount,
  megaworld,
  payo,
  unionPhp,
  acpc,
  JGsummit,
} from "../constants/utils";
import "./css/trustedcompany.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

const TrustedCompany = () => {
  const heighRef = useRef(null);



  useEffect(() => {
    const handleScroll = () => {
   
      const offset = window.scrollY;

      // Adjust the offset value based on your requirements
      if (offset >= 300) {
        heighRef.current.swiper.autoplay.stop();
      } else {
        heighRef.current.swiper.autoplay.start();
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
   
    };
  }, []);

  return (
    <div ref={heighRef} className="trusted-company-container px-6 py-12 tablet:px-0 tablet:py-14">
      <div className="trusted-company-slider"> 
        <div className="title text-base tablet:text-xl">
          Trusted by <span className="gradient">Industry Leading </span>
          Organizations
        </div>

        <Swiper
          ref={heighRef}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          effect="slide"
          speed={5000}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
             
              slidesPerView: 3,
              spaceBetween:10
            },
            // when window width is >= 768px
            768: {
        
              slidesPerView: 4,
            },
            1100: {
        
        slidesPerView: 6,
      },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={pldt} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={pagcor} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={globe} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={megaworld} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={payo} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={paramount} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={acpc} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={JGsummit} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={unionPhp} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={pldt} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={pagcor} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={globe} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={megaworld} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={payo} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={paramount} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={acpc} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={JGsummit} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={unionPhp} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={pldt} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={pagcor} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={globe} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={megaworld} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={payo} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={paramount} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={acpc} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={JGsummit} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={unionPhp} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={pldt} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={pagcor} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={globe} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={megaworld} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={payo} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={paramount} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={acpc} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="each-company">
              <img className="each-company-img" src={JGsummit} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedCompany;
