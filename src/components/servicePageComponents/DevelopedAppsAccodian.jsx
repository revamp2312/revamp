import { motion } from "framer-motion";
import EachDevelopedApp from "./EachDevelopedApp";
import { developedAppData } from "../../constants/developedAppData";

const DevelopedAppsAccodian = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center items-center"
    >
    <div className="flex flex-col gap-20">
    {developedAppData.map((eachApp,index)=>{
      return   <EachDevelopedApp  key={index} {...eachApp}/>
    })}
    </div>
   
    
    </motion.div>
  );
};

export default DevelopedAppsAccodian;
