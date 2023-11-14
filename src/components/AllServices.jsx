import { useState } from "react";
import CXServiceAccordions from "./CXServiceAccordions";
import XMServiceAccordion from "./XMServiceAccordion";
import DevelopedAppsAccodian from "./DevelopedAppsAccodian";
import { cxservice, daservice, xmservice } from "../constants/utils";

const AllServices = () => {
  const [cxService, setCxService] = useState(true);
  const [xmService, setXmService] = useState(false);
  const [daService, setDaService] = useState(false);

  const SETCX = () => {
    setCxService(true);
    setXmService(false);
    setDaService(false);
  };
  const SETXM = () => {
    setCxService(false);
    setXmService(true);
    setDaService(false);
  };
  const SETDA = () => {
    setCxService(false);
    setXmService(false);
    setDaService(true);
  };

  return (
    <div className="flex flex-col justify-center items-center p-[70px] gap-20 w-full max-w-[1440px] m-auto">
      <div className="flex justify-center items-center w-full gap-6 border-b-2 border-solid-[#F3F5FB]">
        <div className="w-4/12 text-center cursor-pointer" onClick={SETCX}>
          <div
            className="flex gap-6 p-4 justify-center items-center"
       style={ cxService ?{
              borderBottom: "2px solid #6C52E3",
              background:
                "linear-gradient(180deg, rgba(237, 234, 252, 0.10) 0%, #EDEAFC 100%)",
                color:"#693ED4"
            }:{
                color:"#999999"
            }}
          >
            <div className="w-12">
              <img src={cxservice} />
            </div>
            <div>
              <button className="text-xl  font-bold">
                Customer Experience
              </button>
            </div>
          </div>
        </div>
        <div className="w-4/12 text-center cursor-pointer" onClick={SETXM}>

        <div
            className="flex gap-6 p-4 justify-center items-center"
       style={ xmService ?{
              borderBottom: "2px solid #6C52E3",
              background:
                "linear-gradient(180deg, rgba(237, 234, 252, 0.10) 0%, #EDEAFC 100%)",
                color:"#693ED4"
            }:{
              color:"#999999"
            }}
          >
            <div className="w-12">
              <img src={xmservice} />
            </div>
            <div>
            <button className="text-xl  font-bold">Experience Management</button>
            </div>
          </div>
        
        </div>
        <div className="w-4/12 text-center cursor-pointer" onClick={SETDA}>
        <div
            className="flex gap-6 p-4 justify-center items-center"
       style={ daService ?{
              borderBottom: "2px solid #6C52E3",
              background:
                "linear-gradient(180deg, rgba(237, 234, 252, 0.10) 0%, #EDEAFC 100%)",
                color:"#693ED4"
            }:{
                color:"#999999"
            }}
          >
            <div className="w-12">
              <img src={daservice} />
            </div>
            <div>
            <button className="text-xl font-bold">Our Developed Apps</button>
            </div>
          </div>
        
      
        </div>
      </div>

      <div>
        {cxService && <CXServiceAccordions />}
        {xmService && <XMServiceAccordion />}
        {daService && <DevelopedAppsAccodian />}
      </div>
    </div>
  );
};

export default AllServices;
