import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const AccordionImage = ({ setImg ,showImage,imgSrc}) => {

  const controls = useAnimation();

useEffect(()=>{
  controls.set({ opacity: 0 });
  controls.start({ opacity: 1 });
},[])
 

  return (
    <div className="max-w-[532px]"
    style={showImage?{display:"block"}:{display:"none"}}>
      <motion.img
       
        animate={controls}
        transition={{ duration: 1.2 }}
        exit={{ opacity: 0 }}
        className="w-full"
        src={imgSrc}
      />
    </div>
  );
};

export default AccordionImage;
