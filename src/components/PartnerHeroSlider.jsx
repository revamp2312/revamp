
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay } from 'swiper/modules';
import { logoFrame } from '../constants/utils';
const PartnerHeroSlider = () => {
  return (
    <div  className='h-[500px]'>
        <Swiper 
       
    direction={'vertical'}
    loop={true}
    speed={7000}
    effect="slide"
    spaceBetween={60}
         
          autoplay={{
            delay:0,
            disableOnInteraction: false,
          }}
    modules={[Autoplay]}
    className="mySwiper "
  >
    <SwiperSlide ><div className='h-[full]'><img className='object-contain w-full h-full' src={logoFrame} /></div></SwiperSlide>
    <SwiperSlide ><div className='h-[full]'><img className='object-contain w-full h-full' src={logoFrame} /></div></SwiperSlide>
    <SwiperSlide ><div className='h-[full]'><img  className='object-contain w-full h-full' src={logoFrame} /></div></SwiperSlide>
    <SwiperSlide ><div className='h-[full]'><img className='object-contain w-full h-full' src={logoFrame} /></div></SwiperSlide>
   
  </Swiper>
    </div>
  )
}

export default PartnerHeroSlider