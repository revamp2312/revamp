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

    <div className="hometext-container">
        <div className="hometext-wrapper">
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
    <SwiperSlide><h1 className='gradient'>CX Revolution</h1></SwiperSlide>
    <SwiperSlide><h1 className='gradient'>Data Intelligence</h1></SwiperSlide>
    <SwiperSlide><h1 className='gradient'>Employee Engagement</h1></SwiperSlide>
   
  </Swiper> : <h1 className='gradient'>Captured in a Blink</h1>}
        </div>
    </div>
   
  )
}

export default HomeText