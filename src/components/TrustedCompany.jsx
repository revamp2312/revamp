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
  // const [swiperAutoplay, setSwiperAutoplay] = useState(true);
  const heighRef = useRef(null);
  console.log(heighRef);

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     // Pause on mouseenter
  //     const handleMouseEnter = () => {
  //       if (swiperRef.current && swiperAutoplay) {
  //         swiperRef.current.swiper.autoplay.stop();
  //         setSwiperAutoplay(false);
  //       }
  //     };

  //     // Resume on mouseleave
  //     const handleMouseLeave = () => {
  //       if (swiperRef.current && !swiperAutoplay) {
  //         swiperRef.current.swiper.autoplay.start();
  //         setSwiperAutoplay(true);
  //       }
  //     };

  //     const container = swiperRef.current;
  //     console.log(swiperRef);

  //     container.addEventListener('mouseenter', handleMouseEnter);
  //     container.addEventListener('mouseleave', handleMouseLeave);

  //     return () => {
  //       container.removeEventListener('mouseenter', handleMouseEnter);
  //       container.removeEventListener('mouseleave', handleMouseLeave);
  //     };
  //   }
  // }, [swiperRef, swiperAutoplay]);
  const [stopSlider, setStopSlider] = useState(false);
  console.log("home coponent rerendered");
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
  console.log(stopSlider);
        // Adjust the offset value based on your requirements
        if (offset >= 300) {
          heighRef.current.swiper.autoplay.stop();
          setStopSlider(true);
        } else {
          heighRef.current.swiper.autoplay.start();
          setStopSlider(false);
        }
      };
  
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div ref={heighRef} className="trusted-company-container">
      <div className="trusted-company-slider">
        <div className="title">Trusted by <span className="gradient">Industry Leading </span>Organizations</div>

        <Swiper
          ref={heighRef}
          slidesPerView={6}
          spaceBetween={10}
          loop={true}
          effect="slide"
         speed={5000}
          centeredSlides={true}
          autoplay={{
            delay:0,
            disableOnInteraction: true,
            pauseOnMouseEnter:true
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
