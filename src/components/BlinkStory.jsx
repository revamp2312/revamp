import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {EffectCoverflow, Parallax, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
//slider component
const BlinkStory = () => {
//   const[onIntro,setonIntro]=useState(true)
// const swiperRef =useRef()
  return (
   <div id='blink'  className='h-[630px] overflow-y-auto relative'>

<div className=' h-[630px]'>

      <div className=" h-[630px] pt-20 story-main flex justify-center items-start w-full max-w-[1440px]">
        <div className="w-full  flex flex-col gap-12 justify-center items-center">
          <div>
            <h2>Our Journey in Transforming CX and Innovating Together</h2>
          </div>
          <Link to="/blinkstory">

          <div>
        
            <button 
          //    onClick={() => {
          // setonIntro(false)
          //     swiperRef.current.slideNext();
          //   }}
             className=" py-4 px-6 border-[1px] border-black rounded-lg hover:bg-purple-600 hover:text-white">
              Dive into Blink CX's Story
            </button>
          </div>
          </Link>
        </div>
      </div>
  

 
    </div>

    </div>
  


  );
};

export default BlinkStory;
