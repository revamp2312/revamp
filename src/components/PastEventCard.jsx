import React from "react";
import { pastArticle } from "../constants/utils";
import { Link } from "react-router-dom";

const PastEventCard = () => {
  return (
    <div
      className="max-w-[421px] flex justify-center items-center px-3 pt-3 pb-6 rounded "
      style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="w-full">
          <img className="w-full" src={pastArticle} alt="event-card" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="read-time w-max py-1 pl-1 pr-3 flex items-center gap-2 rounded bg-[#f7f5ff] mix-blend-multiply">
              <div className="tag py-[2px] px-2 bg-white text-[#693ed4] text-center text-xs font-normal leading-5">
                Event
              </div>
              <div className="time text-[#693ed4] text-xs font-normal leading-5">
                4 min read
              </div>
            </div>
            <div className="text-[#333333]">
              June 1, 2023 • Thursday, 9:00 AM
            </div>
            <div className="max-w-[349px]">
              <p className="font-bold text-[#333333]">
              Gen AI Uncovered: Advancing CX & EX in the Philippines
              </p>
            </div>
          </div>
          <Link to="/pastevents">
            <div>
              <button className="py-3 px-6 rounded-lg border-[1px] text-[#6C52E3] border-[#6C52E3] hover:text-[white] hover:bg-[#6C52E3]">
                Read More
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
