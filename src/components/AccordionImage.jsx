import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { cxAcc2, cxAcc3, cxAcc4, cxAcc5, serviceAccordion} from  "../constants/utils"
const AccordionImage = ({ setImg ,showImage,imgSrc}) => {
  console.log(setImg);
  const controls = useAnimation();
const[isloaded,setIsLoaded]=useState(false)
// const accimgArr=[serviceAccordion,cxAcc2, cxAcc3, cxAcc4, cxAcc5]
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
        // onLoad={addANimation}
      />
    </div>
  );
};

export default AccordionImage;
