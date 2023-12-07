import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
const AccordionImage = ({ setImg }) => {
  const controls = useAnimation();
const[isloaded,setIsLoaded]=useState(false)
  const addANimation = () => {
    setIsLoaded(true)
    controls.set({ opacity: 0 });
    controls.start({ opacity: 1 });

  };
  console.log(isloaded);

  return (
    <div className="max-w-[532px]">
      <motion.img
       style={isloaded?{display:"block"}:{display:"none"}}
        animate={controls}
        transition={{ duration: 1.2 }}
        exit={{ opacity: 0 }}
        className="w-full"
        src={setImg}
        onLoad={addANimation}
      />
    </div>
  );
};

export default AccordionImage;
