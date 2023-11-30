import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { cxDownArrrow } from "../constants/utils";

const BlinkStorySlides = () => {
  const section2019 = useRef();
  const section2020 = useRef();
  const section2021 = useRef();
  const section2022 = useRef();
  const section2023 = useRef();
  const navigate = useNavigate();


  const handleScroll = (eleRef) => {
    console.log(eleRef.current.offsetTop);
    document.getElementById("story-first").scroll({
      top: eleRef.current.offsetTop,
      behavior: "smooth", 
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };
 

  const swiperRef = useRef();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      id="story-first"
      className="z-100 blink-slides sticky  overflow-y-auto top-0 h-[100vh] bg-w scroll-smooth"
    >
      <div className=" relative h-[100vh] story-2018 flex justify-center items-center w-full max-w-[1440px]">
        <div className="max-w-[621px] justify-center items-center flex flex-col gap-6">
          <div className="text-[26px]">
            In late 2018, Blink embarked on a remarkable journey as a Marketing
            Consulting services company
          </div>
          <div className="text-[16px]">
            Initially serving Centric IT Group and esteemed partners like IBM,
            HP, SAP, Dell, and Sailpoint. Those early days laid the foundation
            for what Blink would become—a trusted name in the world of Customer
            Experience (CX) transformation.
          </div>

          <div
            onClick={() => handleScroll(section2019)}
            // onClick={() => swiperRef.current.slideNext()}
            className="absolute bottom-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <p className="text-base text-[#693ED4]">2019</p>
            <div className="w-4">
              <img className="w-4" src={cxDownArrrow} />
            </div>
          </div>

          <div
            onClick={handleGoBack}
            className="absolute top-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <div className="w-4">
              <img className="w-4 rotate-180" src={cxDownArrrow} />
            </div>
            <p className="text-base text-[#693ED4]">intro</p>
          </div>
        </div>
      </div>

      <div ref={section2019} className="relative h-[100vh] story-2019 flex justify-center items-center w-full max-w-[1440px]">
        <div className="max-w-[621px] flex flex-col gap-6 justify-center items-center">
          <div className="text-[26px]">
            Recognizing the burgeoning CX landscape and the evolving needs of
            our partners and clients, we made a pivotal decision in 2019.
          </div>
          <div className="text-[16px]">
            We shifted our focus towards CX Advisory services, building upon our
            extensive marketing experience. It was a bold step, but one that
            would redefine the value we brought to the table. Our journey took
            us beyond our comfort zone. We began engaging clients beyond our
            Centric IT Group and formed our first crucial partnerships with SAP
            Customer Data Cloud and Qualtrics—a turning point in our evolution.
          </div>
     
            <div
              onClick={() => handleScroll(section2020)}
              // onClick={() => swiperRef.current.slideNext()}
              className="absolute bottom-0  w-20 cursor-pointer flex flex-col justify-center items-center"
            >
              <p className="text-base text-[#693ED4]">2020</p>
              <div className="w-4">
                <img className="w-4" src={cxDownArrrow} />
              </div>
            </div>
  
          <div
            onClick={handleGoBack}
            //  swiperRef.current.slideTo(0)
            className="absolute top-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <div className="w-4">
              <img className="w-4 rotate-180" src={cxDownArrrow} />
            </div>
            <p className="text-base text-[#693ED4]">intro</p>
          </div>
        </div>
      </div>

      <div
        ref={section2020}
        id="2020"
        className="relative h-[100vh] story-2020 flex justify-center items-center w-full max-w-[1440px]"
      >
        <div className="max-w-[621px] justify-center items-center flex flex-col gap-6">
          <div className="text-[26px]">
            In the year 2020, we realized that true CX transformation required
            more than advice; it required innovation.
          </div>
          <div className="text-[16px]">
            We ventured into Innovations and mobile development, complementing
            our CX offerings with cutting-edge solutions that pushed the
            boundaries of possibility. The turning point came when we secured
            our first contracts in the insurance and banking sectors, venturing
            into uncharted territory and proving our mettle. Simultaneously, we
            embarked on a major Data Science project in the government sector,
            showcasing our versatility and commitment to driving change.
          </div>
          <div
           onClick={() => handleScroll(section2021)}
            // onClick={() => swiperRef.current.slideNext()}
            className="absolute bottom-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <p className="text-base text-[#693ED4]">2021</p>
            <div className="w-4">
              <img className="w-4" src={cxDownArrrow} />
            </div>
          </div>
          <div
            onClick={handleGoBack}
            className="absolute top-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <div className="w-4">
              <img className="w-4 rotate-180" src={cxDownArrrow} />
            </div>
            <p className="text-base text-[#693ED4]">intro</p>
          </div>
        </div>
      </div>

      <div
        ref={section2021}
        className="relative h-[100vh] story-2021 flex justify-center items-center w-full max-w-[1440px]"
      >
        <div className="max-w-[621px] flex justify-center items-center flex-col gap-6">
          <div className="text-[26px]">
            Blink's reputation as a leader in Customer Experience and Experience
            Management grew stronger in 2021.
          </div>
          <div className="text-[16px]">
            We clinched major contracts with the top two telcos in the
            Philippines, cementing our status as an industry frontrunner. Our
            ability to deliver exceptional CX and manage experiences became our
            signature, setting us apart in the industry.
          </div>
          <div
           onClick={() => handleScroll(section2022)}
            // onClick={() => swiperRef.current.slideNext()}
            className="absolute bottom-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <p className="text-base text-[#693ED4]">2022</p>
            <div className="w-4">
              <img className="w-4" src={cxDownArrrow} />
            </div>
          </div>
          <div
            onClick={handleGoBack}
            className="absolute top-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <div className="w-4">
              <img className="w-4 rotate-180" src={cxDownArrrow} />
            </div>
            <p className="text-base text-[#693ED4]">intro</p>
          </div>
        </div>
      </div>

      <div
        ref={section2022}
        className="relative h-[100vh] story-2022 flex justify-center items-center w-full max-w-[1440px]"
      >
        <div className="max-w-[621px] justify-center items-center flex flex-col gap-6">
          <div className="text-[26px]">
            The year 2022 was a defining moment.
          </div>
          <div className="text-[16px]">
            We soared to new heights, experiencing hypergrowth in terms of
            revenue and customer relationships, both in the private and public
            sectors. It was also the year we embarked on an exciting journey of
            innovation, developing our own Insights Product called IMPULS.CX—an
            embodiment of our commitment to staying at the forefront of CX
            excellence.
          </div>
          <div
           onClick={() => handleScroll(section2023)}
            // onClick={() => swiperRef.current.slideNext()}
            className="absolute bottom-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <p className="text-base text-[#693ED4]">2023</p>
            <div className="w-4">
              <img className="w-4" src={cxDownArrrow} />
            </div>
          </div>
          <div
            onClick={handleGoBack}
            className="absolute top-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <div className="w-4">
              <img className="w-4 rotate-180" src={cxDownArrrow} />
            </div>
            <p className="text-base text-[#693ED4]">intro</p>
          </div>
        </div>
      </div>

      <div
        ref={section2023}
        className="relative h-[100vh] story-2023 flex justify-center items-center w-full max-w-[1440px]"
      >
        <div className="max-w-[621px] justify-center items-center flex flex-col gap-6">
          <div className="text-[26px]">
            Today, we stand as Blink CX, a testament to the power of evolution
            and partnership.
          </div>
          <div className="text-[16px]">
            Our journey continues, guided by our commitment to transforming
            customer experiences, innovating tirelessly, and delivering results
            that matter. We are honored to have you alongside us on this
            extraordinary journey, and we look forward to shaping a brighter CX
            future together.
          </div>
          {/* <div onClick={() => swiperRef.current.slideNext()} className="absolute bottom-0  w-20 cursor-pointer flex flex-col justify-center items-center">
            <p className="text-base text-[#693ED4]">2020</p>
            <div className="w-4">
            <img className="w-4" src="" />

            </div>
          </div> */}
          <div
            onClick={handleGoBack}
            className="absolute top-0  w-20 cursor-pointer flex flex-col justify-center items-center"
          >
            <div className="w-4">
              <img className="w-4 rotate-180" src={cxDownArrrow} />
            </div>
            <p className="text-base text-[#693ED4]">intro</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlinkStorySlides;