import { useState } from "react";
import {

  cxaccordioandata2,
  xmaccordioandata
} from "../constants/accordiondata";
import {  xmAcc1, xmAccSecond } from "../constants/utils";
import Accordion from "./Accordion";
import AccordionSecond from "./AccordionSecond";
import AccordionImage from "./AccordionImage";
import { xmaccordianimages } from "../constants/accordianimages";
import { motion } from "framer-motion";




const XMServiceAccordion = () => {
    const [showAccordion, setShowAccordion] = useState(null);
    const [showAccordion2, setShowAccordion2] = useState(null);
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }} 
      className="flex justify-center items-center">
        <div className="wrapper flex flex-col gap-20">
          <div className="flex flex-col gap-12 justify-center items-center rounded-3xl bg-[#F7F5FF] p-12">
            <div className="heading">
              <h2>Our Services</h2>
            </div>
            <div className="flex">
              <div className="w-6/12">
                <div className="max-w-[532px]">
                  <AccordionImage
                    setImg={
                      showAccordion === null
                        ? xmAcc1
                        : xmaccordianimages[showAccordion].setImg
                    }
                  />
                </div>
              </div>
              <div className="w-6/12">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col gap-4">
                    {xmaccordioandata.map((each, index) => {
                      return (
                        <Accordion
                          key={index}
                          heading={each.heading}
                          content={each.content}
                          showAc={index === showAccordion}
                          setAcc={() => setShowAccordion(index)}
                          hideAcc={() => {
                            setShowAccordion(null);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 justify-center items-center  ">
            <div className="flex">
              <div className="w-6/12 flex flex-col gap-6 p-12 ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-cente rounded bg-[#6C52E3] py-1 px-3 text-[#FAFCFE] w-fit">
                    <div className="flex items-center">*</div>
                    <div className="text-[14px] leading-6 font-semibold">
                      USE CASES AND KPIs
                    </div>
                  </div>
                  <h2>Solutions</h2>
                </div>
                <div className="flex justify-center items-center border-t-2">
                  <div className="flex flex-col ">
                    {cxaccordioandata2.map((each, index) => {
                      return (
                        <AccordionSecond
                          key={index}
                          heading={each.heading}
                          content={each.content}
                          showAc={index === showAccordion2}
                          setAcc={() => setShowAccordion2(index)}
                          hideAcc={() => {
                            setShowAccordion2(null);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
  
              <div className="w-6/12 flex justify-end pt-12">
                <div >
                  <img className="w-full" src={xmAccSecond} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
}

export default XMServiceAccordion