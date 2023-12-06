import { motion,useAnimation } from "framer-motion";
import { useEffect } from "react";

const AccordionImage = ({setImg}) => {
  const controls=useAnimation()
  useEffect(()=>{
    controls.set({opacity:0})
    controls.start({opacity:1})
  },[setImg])

  return (
    <div
    
     className="max-w-[532px]">
    
     <motion.img 
    
      animate={controls}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
     className="w-full" src={setImg} /> 

    </div>
  );
};

export default AccordionImage;
