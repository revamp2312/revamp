import { useState } from "react";
import { SettingtheBaseline } from "../constants/utils";

const EngagementModelCard = (props) => {
  console.log(props);
  const { title, description, bgcolor, imgsrc, isFisrst } = props;
  const [clicked, setClicked] = useState(false);
  return (
    <div className=" flex  flex-col gap-10 justify-center items-start ">
      <div
        onMouseEnter={() => {
          setClicked(true);
        }}
        onMouseLeave={() => {
          setClicked(false);
        }}
        className="flex"
      >
        {!isFisrst && (
          <div
            className="relative w-[100px]  h-[48px] "
            style={{ background: bgcolor }}
          >
            <div className="absolute z-[1] bottom-0  left-0 w-0 h-0 border-l-[24px] border-l-white  border-solid border-t-[24px] border-t-transparent  border-b-[25px] border-b-transparent "></div>
          </div>
        )}
        <div
          className="relative w-[160px]  h-[48px] "
          style={{ background: bgcolor }}
        >
          <div
            className="absolute z-[-1] bottom-0  right-[-24px] w-0 h-0 border-l-[24px]  border-solid border-t-[24px] border-t-transparent  border-b-[25px] border-b-transparent "
            style={{ borderLeftColor: bgcolor }}
          ></div>
          <div
            className=" z-20  absolute border-4 border-[#693ED4]  rounded-[50%] p-6 bg-white transition-all duration-500 "
            style={
              clicked
                ? { left: "28px", top: "24px" }
                : { left: "-8px", top: "-20px" }
            }
          >
            <img className="w-[32px] " src={imgsrc} />
          </div>
          <div
            className="absoloue overflow-hidden ] w-[235px] left-0 top-0 engamenent-card  flex justify-center items-center py-6 pl-7 pr-4 bg-[#F7F5FF] border-[#6C52E3] border-l-4 border-solid   duration-500 origin-top-left  transition-all "
            style={
              clicked
                ? { height: "396px", visibility: "visible", opacity: "1" }
                : { height: "200px", visibility: "hidden", opacity: "0.1" }
            }
          >
            <div className=" mt-[80px] flex flex-col gap-2 justify-start items-start">
              <div
                className="  text-xl font-semibold "
                style={clicked ? { display: "block" } : { display: "none" }}
              >
                {title}
              </div>
              <div
                style={clicked ? { display: "block" } : { display: "none" }}
                className=" text-base font-normal"
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-end">
        <p className="max-w-[160px]  text-[18px] font-semibold  ">{title}</p>
      </div>
    </div>
  );
};

export default EngagementModelCard;
