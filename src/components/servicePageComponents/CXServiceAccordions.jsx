import { useEffect, useState } from "react";
import {
  cxaccordioandata,
  cxaccordioandata2,
} from "../../constants/accordiondata";
import {  serviceAccordion2 } from "../../constants/utils";
import Accordion from "./Accordion";
import AccordionSecond from "./AccordionSecond";
import AccordionImage from "./AccordionImage";
import { cxaccordianimages } from "../../constants/accordianimages";
import { motion, useAnimation } from "framer-motion";
import AccordionForSmallDevice from "./AccordionForSmallDevice";

const CXServiceAccordions = () => {
  const [showAccordion, setShowAccordion] = useState(null);
  const [showImgAccordion, setShowImgAccordion] = useState(0);
  const [showAccordion2, setShowAccordion2] = useState(null);
  
  const controls = useAnimation();
  useEffect(() => {
    controls.set({ opacity: 0 });
    controls.start({ opacity: 1 });
  }, [showImgAccordion]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-8 justify-center items-center"
    >
    <div className="flex justify-center items-center laptop:hidden"><h1>Services Offered</h1></div>
      <div className="wrapper flex flex-col gap-12 tablet:gap-20">

        <div className="flex flex-col gap-4 tablet:gap-12 justify-center items-center rounded-3xl bg-[#F7F5FF] p-4  tablet:p-12">
          <div className="hidden laptop:flex">
            <div className="w-6/12">
              <motion.div
                animate={controls}
                transition={{ duration: 1.2 }}
                exit={{ opacity: 0 }}
                className="max-w-[532px] overflow-hidden"
              >
                {cxaccordianimages.map((each, index) => {
                  return (
                    <AccordionImage
                      key={index}
                      showImage={index === showImgAccordion}
                      setImg={showImgAccordion}
                      imgSrc={each.setImge}
                      // setImg={
                      //   showAccordion === null
                      //     ? serviceAccordion
                      //     : cxaccordianimages[showAccordion].setImge
                      // }
                    />
                  );
                })}
              </motion.div>
            </div>
            <div className="w-6/12 flex justify-center items-center">
              <div className="flex flex-col gap-8 justify-center items-start">
              <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-cente rounded bg-[#6C52E3] py-1 px-3 text-[#FAFCFE] w-fit">
                  <div className="flex items-center">*</div>
                  <div className="text-[14px] leading-6 font-semibold">
                  Customer Experience
                  </div>
                </div>
                <div><h2>Services Offered</h2></div>
              </div>
           

                <div className="flex flex-col gap-4">
                  {cxaccordioandata.map((each, index) => {
                    return (
                      <Accordion
                        key={index}
                        heading={each.heading}
                        content={each.content}
                        keyBenefits={each.keyBenefits}
                        showAc={index === showAccordion}
                        setAcc={() => {setShowAccordion(index)
                        setShowImgAccordion(index)}}
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
          {cxaccordioandata.map((each, index) => {
                    return (
                      <AccordionForSmallDevice
                        key={index}
                        heading={each.heading}
                        content={each.content}
                        image={each.image}
                        keyBenefits={each.keyBenefits}
                        showAc={index === showAccordion}
                        setAcc={() => {setShowAccordion(index)
                        setShowImgAccordion(index)}}
                        hideAcc={() => {
                          setShowAccordion(null);
                        }}
                      />
                    );
                  })}
        </div>
        <div className="flex  justify-center items-center  ">
          <div className="flex flex-col laptop:flex-row">
            <div className="w-full laptop:w-6/12 flex flex-col gap-6 p-4 laptop:p-12 ">
              <div className="flex flex-col gap-4">
              
                <h2>Use Cases</h2>
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

            <div className="w-full laptop:w-6/12 flex justify-end">
              <div>
                <img className="w-full" src={serviceAccordion2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CXServiceAccordions;
