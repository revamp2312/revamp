import { useState } from "react";
import { yt1, yt2, yt3, yt4, ytblinklogo, ytplay } from "../../constants/utils";
import { useSelector } from "react-redux";

const SocialMedia = () => {
  const [bg, setbg] = useState(null);
  const eventData =useSelector((store)=>store.events)
  const activeWebinar=eventData.webinars
  const handleMouseOver = {
    background: "rgba(19, 19, 19, 0.80)",
    visibility: "visible",
    opacity: "1",
  };
  const handleMouseOut = {
    background: "none",
    visibility: "hidden",
    opacity: "0",
  };

  return (
    <>
 {!activeWebinar &&   <div
      className="flex justify-center items-center max-w-[1440px] m-auto w-full px-6 tablet:px-[70px] py-20"
      style={{ background: "linear-gradient(180deg, #F7F5FF 0%, #FFF 100%)" }}
    >
      <div className="flex flex-col gap-[42px]">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <div>
            <h2>Join Our Social Media Community</h2>
          </div>
          <div className="max-w-[535px] text-center ">
            <p className="text-[#666] leading-7">
              Connect with us and discover inspiring videos and informative
              social media posts
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-[25%,25%,25%,25%] tablet:grid-rows-[50%,50%]  tablet:grid-cols-2 laptop:grid-rows-[100%] laptop:grid-cols-4 gap-5">
        <a target="blank" href="https://www.youtube.com/watch?v=JG9Jm5D0vo8">
          <div
            onMouseOver={() => {
              setbg(1);
            }}
            onMouseLeave={() => {
              setbg(null);
            }}
            className="relative cursor-pointer  h-full"
          >
            <img className="w-full  h-full object-cover" src={yt1} alt="yt-image" />
            <div
              className="p-6 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all duration-500"
              style={bg === 1 ? handleMouseOver : handleMouseOut}
            >
              <div className="flex flex-col justify-between items-start text-[#FFFDFA] h-full w-full  relative">
                <div>
                  <p className="font-semibold text-[#FFFDFA] w-[230px]">
                    Customer Experience Trends to Watch for in 2023
                  </p>
                </div>
                <div className="w-20 absolute top-[35%] left-[35%]">
                  <img src={ytplay} />
                </div>
                <div className="flex gap-2 justify-center items-center ">
                  <div className="w-12">
                    <img className="w-full" src={ytblinklogo} />
                  </div>
                  <div className="text-xs">Blink Customer Experience</div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a target="blank" href="https://www.youtube.com/watch?v=qBL8S5MgbqA">
          <div 
            onMouseOver={() => {
              setbg(2);
            }}
            onMouseLeave={() => {
              setbg(null);
            }}
          className="relative cursor-pointer  h-full">
            <img className="w-full h-full object-cover" src={yt2} alt="yt-image" />
            <div
              className="p-6 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all duration-500"
              style={bg === 2 ? handleMouseOver : handleMouseOut}
            >
              <div className="flex flex-col justify-between items-start text-[#FFFDFA] h-full w-full  relative">
                <div>
                  <p className="font-semibold text-[#FFFDFA] w-[230px]">
                   How to Increase your Feedback Engagement
                  </p>
                </div>
                <div className="w-20 absolute top-[35%] left-[35%]">
                  <img src={ytplay} />
                </div>
                <div className="flex gap-2 justify-center items-center ">
                  <div className="w-12">
                    <img className="w-full" src={ytblinklogo} />
                  </div>
                  <div className="text-xs">Blink Customer Experience</div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a target="blank" href="https://www.facebook.com/photo?fbid=805186244742861&set=pcb.805186404742845">
          <div
            onMouseOver={() => {
              setbg(3);
            }}
            onMouseLeave={() => {
              setbg(null);
            }}
            className="relative h-full w-full cursor-pointer"
          >
            <img className="h-full w-full object-cover" src={yt3} alt="yt-image" />
            <div
              className="p-6 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all duration-500"
              style={bg === 3 ? handleMouseOver : handleMouseOut}
            >
              <div className="flex flex-col justify-between items-start text-[#FFFDFA] h-full w-full  relative">
                <div className="flex items-center">
                  <p className="font-semibold text-[#FFFDFA] w-[230px]">
                    Experience the Power of Zendesk: 4 Advantages You Can’t
                    Ignore!
                  </p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M23.5117 20.1042C23.3774 20.2386 23.1935 20.3234 22.9814 20.3234C22.783 20.3222 22.593 20.2429 22.4527 20.1026C22.3124 19.9623 22.233 19.7723 22.2319 19.5739V11.7391L14.3971 11.7391C14.1987 11.738 14.0087 11.6586 13.8684 11.5183C13.7281 11.378 13.6487 11.188 13.6476 10.9896C13.6476 10.5795 13.987 10.2401 14.3971 10.2401L22.9814 10.2401C23.3915 10.2401 23.7309 10.5795 23.7309 10.9896V19.5739C23.7309 19.786 23.6461 19.9699 23.5117 20.1042Z"
                        fill="white"
                      />
                      <path
                        d="M23.392 11.64L11.4914 23.5406C11.2015 23.8305 10.7206 23.8305 10.4307 23.5406C10.1408 23.2507 10.1408 22.7698 10.4307 22.4799L22.3313 10.5793C22.6212 10.2894 23.1021 10.2894 23.392 10.5793C23.6819 10.8692 23.6819 11.3501 23.392 11.64Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex gap-2 justify-center items-center ">
                  <div className="w-12">
                    <img className="w-full" src={ytblinklogo} />
                  </div>
                  <div className="text-xs">Blink Digtal</div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a target="blank" href="https://www.facebook.com/photo/?fbid=779414957319990&set=pcb.779415183986634">
         <div
          onMouseOver={() => {
              setbg(4);
            }}
            onMouseLeave={() => {
              setbg(null);
            }}
           className="relative h-full w-full cursor-pointer">
            <img className="h-full w-full object-cover" src={yt4} alt="yt-image" />
            <div
              className="p-6 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all duration-500"
              style={bg === 4  ? handleMouseOver : handleMouseOut}
            >
              <div className="flex flex-col justify-between items-start text-[#FFFDFA] h-full w-full  relative">
                <div className="flex items-center">
                  <p className="font-semibold text-[#FFFDFA] w-[230px]">
                   AI will Transform Contact Centers in 2023
                  </p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M23.5117 20.1042C23.3774 20.2386 23.1935 20.3234 22.9814 20.3234C22.783 20.3222 22.593 20.2429 22.4527 20.1026C22.3124 19.9623 22.233 19.7723 22.2319 19.5739V11.7391L14.3971 11.7391C14.1987 11.738 14.0087 11.6586 13.8684 11.5183C13.7281 11.378 13.6487 11.188 13.6476 10.9896C13.6476 10.5795 13.987 10.2401 14.3971 10.2401L22.9814 10.2401C23.3915 10.2401 23.7309 10.5795 23.7309 10.9896V19.5739C23.7309 19.786 23.6461 19.9699 23.5117 20.1042Z"
                        fill="white"
                      />
                      <path
                        d="M23.392 11.64L11.4914 23.5406C11.2015 23.8305 10.7206 23.8305 10.4307 23.5406C10.1408 23.2507 10.1408 22.7698 10.4307 22.4799L22.3313 10.5793C22.6212 10.2894 23.1021 10.2894 23.392 10.5793C23.6819 10.8692 23.6819 11.3501 23.392 11.64Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex gap-2 justify-center items-center ">
                  <div className="w-12">
                    <img className="w-full" src={ytblinklogo} />
                  </div>
                  <div className="text-xs">Blink Digtal</div>
                </div>
              </div>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>}
    </>
  );
};

export default SocialMedia;
