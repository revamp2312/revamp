import { motion,useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import { cxAcc2, cxAcc3, cxAcc4, cxAcc5, serviceAccordion} from "../constants/utils"
import { cxaccordianimages } from "../constants/accordianimages";
const AccordionImage = ({setImg}) => {
  const controls=useAnimation()
  const [loaded, setLoaded] = useState(false);
  const isloaded =useRef()

  console.log(isloaded);
  const addANimation=()=>{

    controls.set({opacity:0})
    controls.start({opacity:1})
  }

  return (
    <div
 
     className="max-w-[532px]">
    
     <motion.img 

      ref={isloaded}
      animate={controls}
      transition={{ duration: 1.2 }}
      exit={{ opacity: 0 }}
     className="w-full" src={setImg} 
    onLoad={addANimation}
     /> 

    </div>
  );
};

export default AccordionImage;
