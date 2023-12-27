import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { logoFrame } from "../../constants/utils";
const PartnerHeroSlider = () => {
  return (
    <div className="max-h-[500px] overflow-hidden bg-transparen">
      <Swiper
       slidesPerView={"auto"}
        centeredSlides={true}
        direction={"vertical"}
        loop={true}
        speed={20000}
        effect="slide"
        spaceBetween={-20}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper max-h-[500px]"
      >
        <SwiperSlide className="!bg-transparent h-[full]">
          <div className="h-[full]">
            <img className="object-contain w-full h-full" src={logoFrame} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!bg-transparent h-[full]">
          <div className="h-[full]">
            <img className="object-contain w-full h-full" src={logoFrame} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!bg-transparent h-[full]">
          <div className="h-[full]">
            <img className="object-contain w-full h-full" src={logoFrame} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!bg-transparent h-[full]">
          <div className="h-[full]">
            <img className="object-contain w-full h-full" src={logoFrame} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PartnerHeroSlider;
