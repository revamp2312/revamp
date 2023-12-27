import { Swiper, SwiperSlide } from 'swiper/react';
import "./css/hometext.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import {Autoplay } from 'swiper/modules';

const HomeText = (props) => {
  console.log(props);
  const {textanimation} =props;
  return (

    <div className="hometext-container text-center laptop:text-left">
        <div className="hometext-wrapper ">
 {  textanimation ?     <Swiper
           slidesPerView={1}
    direction={'vertical'}
    loop={true}
          
          
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
    modules={[Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide><h1 className='gradient text-center laptop:text-left'>CX Revolution</h1></SwiperSlide>
    <SwiperSlide><h1 className='gradient text-center laptop:text-left'>Artificial Intelligence</h1></SwiperSlide>
    <SwiperSlide><h1 className='gradient text-center laptop:text-left' >Employee Engagement</h1></SwiperSlide>
   
  </Swiper> : <h1 className='gradient'>Prioritize Experience!</h1>}
        </div>
    </div>
   
  )
}

export default HomeText