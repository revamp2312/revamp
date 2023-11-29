import Logo from "./Logo";
import "./css/header.css";
import { Link, useLocation } from "react-router-dom";
import { HeaderAbout1, HeaderAbout2, HeaderAbout3, HeaderAbout4, events } from "../constants/utils";
import { useHeaderdata } from "../constants/useHeaderdata"; //custom Hook
import { useEffect } from "react";
const Header = () => {
  // let {pathname} = useLocation();
  // useEffect(()=>{
  //   window.scrollTo({top:0});
   
  // },[pathname]);
  const {
    showSubHeader,
    setShowSubHeade,
    event,
    about,

    mouseOnEvent,
    mouseOnAbout,
 
  } = useHeaderdata();

  return (
    <>
      <div className="header-container relative w-[100%] m-auto max-w-[1440px] h-[90px] flex justify-center items-center py-0 px-[70px] border-b-[1px] border-solid border-[#D6DEE5] ">
        <div className="header-wrapper w-[100%] flex justify-between">
          <div className="logo-and-menus flex justify-center items-center">
            <div className="logo">
              <Logo />
            </div>
            <div className="all-menus">
              <ul className=" flex gap-6 list-none">
                <Link to="/">
                  <li className="cursor-pointer text-[#333333] text-[14px] font-normal">
                    Home
                  </li>
                </Link>

                <li
                  onClick={() => {
                    setShowSubHeade(!showSubHeader);
                  }}
                  className="cursor-pointer text-[#333333] text-[14px] font-normal"
                >
                  Company
                </li>

                <Link to="/services">
                  <li className="cursor-pointer text-[#333333] text-[14px] font-normal">
                    Services
                  </li>
                </Link>
                <Link to="/partners">
                  <li className="cursor-pointer text-[#333333] text-[14px] font-normal">
                    Partners
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="contactUs flex justify-center items-center text-[#FFFDFA]">
            <Link to="/contact">
              <button className="cursor-pointer py-[14px] px-6 text-[#FFFDFA] text-[14px] rounded-lg border-none font-semibold ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="header-submenu absolute top-90px z-50 grid transition-[grid-template-rows]  duration-[600ms] max-w-[1440px] m-auto  w-[100%] bg-[#F7F5FF]  "
        style={
          showSubHeader
            ? { gridTemplateRows: "1fr" }
            : { gridTemplateRows: "0fr" }
        }
      >
        <div className="overflow-hidden flex ">
          <div className="w-[28%] flex  items-start py-12 pl-[70px]">
            <div className=" flex flex-col gap-12 ">
              <div className="flex flex-col gap-2">
                <div className="text-[16px] text-[#333] leading-5">Careers</div>
                <div className="text-[14px] text-[#666] leading-5 max-w-[295px]">
                  Join our passionate team and embark on a rewarding career
                  journey with us, where innovation and growth are at the
                  forefront of our culture.
                </div>
              </div>
              <div>
                <div>
                  <button className="text-[#693ED4] text-[16px] font-bold leading-6">
                    See job openings
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] bg-white px-[70px] py-8 ">
            <div className="flex flex-col gap-4">
              <div className="text-[12px] font-semibold leading-5 text-[#999] tracking-[0.96px]">
                COMPANY
              </div>
           <Link to="/aboutus" >
           <div
                className="p-[15px] flex flex-col gap-1 cursor-pointer hover:bg-[] hover:rounded-md"
                style={
                  about
                    ? { background: "#F7F5FF" }
                    : { background: "transparent" }
                }
                onMouseOver={mouseOnAbout}
              >
                <div className="text-[#693ED4] text-[14px] font-semibold leading-6 tracking-[-0.28px]">
                  About us
                </div>
                <div className="text-[#666] text-[14px] font-normal leading-6">
                  Discover our story, mission and vision,
                  <br /> and get to know our team.
                </div>
              </div>
           </Link>   

           <Link to="/eventsandupdates">
              <div
                className="p-[15px] flex flex-col gap-1 cursor-pointer hover:bg-[#F7F5FF] hover:rounded-md"
                style={
                  event
                    ? { background: "#F7F5FF" }
                    : { background: "transparent" }
                }
                onMouseOver={mouseOnEvent}
                // onMouseLeave={mouseisOut}
              >
                <div className="text-[#693ED4] text-[14px] font-semibold leading-6 tracking-[-0.28px]">
                  Events and Updates
                </div>
                <div className="text-[#666] text-[14px] font-normal leading-6">
                  Stay updated with our latest company
                  <br /> news and events.
                </div>
              </div>
              </Link>
            
            </div>
          </div>

          <div className="w-[40%] px-[70px] py-8 bg-[white]">
            {event && (
              <div className="events-and-updates flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="text-[#999] text-[12px] font-semibold leading-5 tracking-[0.96px]">
                    EVENTS AND UPDATES
                  </div>
                  <div className="text-[#693ED4] text-[14px] font-semibold leading-6 tracking-[-0.28px]">
                    What’s New
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-6">
                    <div className="first-event flex flex-col gap-6">
                      <div className="rounded-md">
                        <img src={events} />
                      </div>
                      <div className="flex flex-col gap-[10px] px-[10px]">
                        <div className="text-[#693ED4] text-[14px] font-semibold leading-6 tracking-[-0.28px]">
                          Event title{" "}
                        </div>
                        <div className="text-[#666] text-[14px] font-normal leading-6">
                          Lorem ipsum dolor sit amet consectetur.
                        </div>
                      </div>
                      <div className="px-[10px]">
                        <button className="text-[#666] text-[14px] font-bold leading-6">
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="second-event flex flex-col gap-6">
                      <div className="rounded-md">
                        <img src={events} />
                      </div>
                      <div className="flex flex-col gap-[10px] px-[10px]">
                        <div className="text-[#693ED4] text-[14px] font-semibold leading-6 tracking-[-0.28px]">
                          Event title{" "}
                        </div>
                        <div className="text-[#666] text-[14px] font-normal leading-6">
                          Lorem ipsum dolor sit amet consectetur.
                        </div>
                      </div>
                      <div className="px-[10px]">
                        <button className="text-[#666] text-[14px] font-bold leading-6">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="flex justify-center items-center">
                  <div>
                    <button className="text-[#693ED4] text-[14px] font-semibold leading-6 tracking-[-0.28px]">
                      See all events & updates
                    </button>
                  </div>
                </div>
              </div>
            )}

            {about && <div className="flex justify-center items-center gap-5">
                  <div className="grid grid-cols-3 grid-rows-[50%]">
                    <div className="col-span-2 row-end-2">
                      <img src={HeaderAbout1} />
                    </div>
                    <div className="col-start-3 row-start-1 row-end-3">
                      <img src={HeaderAbout3} />
                    </div>
                    <div className="col-span-2 row-start-3 row-end-4 ">
                      <img src={HeaderAbout4} />
                    </div>
                    <div className="row-start-3 row-end-4 mt-3">
                      <img src={HeaderAbout2} />
                    </div>
                  </div>
            </div>}
  
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
