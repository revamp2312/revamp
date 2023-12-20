import { Link } from "react-router-dom";
import {
  alida,
  aircall,
  yellowai,
  cloudtalk,
  qualtrics,
  asana,
  zendesk,
  partnerwithus,
} from "../constants/utils";
import "./css/technologypartners.css";
import PartnerWithUs from "./PartnerWithUs";

const TechnologyPartners = () => {
  return (
    <div className="technology-partner-container flex justify-center items-center m-auto max-w-[1440px] w-[100%] py-20 px-6 tablet:px-14 laptop:px-[70px] bg-[#150c2a]">
      <div className="technology-partner-wrapper flex flex-col gap-12">
        <div className="top flex justify-start items-start gap-12 flex-col tablet:flex-row tablet:justify-between">
          <div className="left flex flex-col gap-2 text-white max-w-[900px]">
            <div className="title text-[#fffdfa]">
              <p className="text-[#fffdfa]">TECHNOLOGY PARTNERS</p>
            </div>
            <div className="heading">
              <h2 className="text-[#fffdfa]">
                Our partnerships at the core of your transformative success
              </h2>
            </div>
          </div>
          <div className="right flex justify-center items-center">
            <div className="partner-btn">
              <Link to="/partners">
                {" "}
                <button className="cursor-pointer flex justify-center items-center text-[#fffdfa] py-4 px-6 rounded-lg border-none text-base font-bold leading-6 capitalize ">
                  Meet our Partners
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="all-partners grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-x-6 gap-y-8">
            <div className="each-partner max-w-[360px]">
              <img className="w-[100%]" src={zendesk} />
            </div>
            <div className="each-partner max-w-[360px]">
              <img className="w-[100%]" src={yellowai} />
            </div>
            <div className="each-partner max-w-[360px]">
              <img className="w-[100%]" src={cloudtalk} />
            </div>
            <div className="each-partner max-w-[360px]">
              <img className="w-[100%]" src={aircall} />
            </div>
            <div className="each-partner max-w-[360px]">
              <img className="w-[100%]" src={qualtrics} />
            </div>
            <div className="each-partner max-w-[360px]">
              <img className="w-[100%]" src={alida} />
            </div>
            <div className="each-partner max-w-[360px]">
              <img className="w-[100%]" src={asana} />
            </div>
           <PartnerWithUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPartners;
