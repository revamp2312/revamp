import Logo from "./Logo";
import "./css/header.css";
import { Link, useLocation } from "react-router-dom";
import {
  HeaderAbout1,
  HeaderAbout2,
  HeaderAbout3,
  HeaderAbout4,
  events,
} from "../constants/utils";
import { useHeaderdata } from "../constants/useHeaderdata"; //custom Hook
import { useEffect } from "react";
const Header = () => {
  let { pathname } = useLocation();
  const {
    showSubHeader,
    setShowSubHeade,
    event,
    about,
    mouseOnEvent,
    mouseOnAbout,
  } = useHeaderdata();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setShowSubHeade(false);
  }, [pathname]);

  return (
    <>
      <div className="header-container relative w-[100%] m-auto max-w-[1440px] h-[90px] flex justify-center items-center py-0 px-[70px] border-b-[1px] border-solid border-[#D6DEE5] ">
        <div className="header-wrapper w-[100%] flex justify-between h-full">
          <div className="logo-and-menus flex  gap-12 justify-center items-center h-full">
            <div className="w-24 logo">
              <Logo />
            </div>
            <div className="all-menus h-full">
              <ul className=" flex gap-6 list-none h-full justify-center items-center">
                <Link
                  onMouseOver={() => {
                    setShowSubHeade(false);
                  }}
                  to="/"
                  className="h-full "
                >
                  <li className="h-full flex justify-center items-center  cursor-pointer text-[#333333] hover:text-[#693ED4] text-[14px] font-normal relative after:h-[2px] after:w-full after:absolute after:bg-transparent after:hover:bg-[#693ED4] after:bottom-0 after:left-0">
                    Home
                  </li>
                </Link>

                <li
                  onMouseOver={() => {
                    setShowSubHeade(true);
                  }}
                 style={showSubHeader?{color:"#693ED4"}:{color:"#333333"}}
                  className="cursor-pointer  text-[#333333] h-full flex justify-center items-center  text-[14px] font-normal hover:text-[#693ED4] relative after:h-[2px] after:w-full after:absolute after:bg-transparent after:hover:bg-[#693ED4] after:bottom-0 after:left-0"
                >
                  Company
                  <div style={showSubHeader?{background:"#693ED4"}:{background:"#fff"}} className="absolute bottom-0 w-full bg-[#693ED4] h-[2px]"></div>
                </li>

                <Link
                  onMouseOver={() => {
                    setShowSubHeade(false);
                  }}
                  to="/services"
                  className="h-full"
                >
                  <li className="h-full flex justify-center  items-center cursor-pointer text-[#333333] text-[14px] font-normal hover:text-[#693ED4] relative after:h-[2px] after:w-full after:absolute after:bg-transparent after:hover:bg-[#693ED4] after:bottom-0 after:left-0">
                    Services
                  </li>
                </Link>
                <Link
                  onMouseOver={() => {
                    setShowSubHeade(false);
                  }}
                  to="/partners"
                  className="h-full"
                >
                  <li className="h-full flex justify-center  items-center cursor-pointer text-[#333333] text-[14px] font-normal hover:text-[#693ED4] relative after:h-[2px] after:w-full after:absolute after:bg-transparent after:hover:bg-[#693ED4] after:bottom-0 after:left-0">
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
        onMouseLeave={() => {
          setShowSubHeade(false);
        }}
        className="header-submenu absolute top-90px z-50 grid transition-[grid-template-rows] left-0 right-0  duration-[600ms] max-w-[1440px] m-auto  w-full bg-[#F7F5FF]  "
        style={
          showSubHeader
            ? { gridTemplateRows: "1fr" }
            : { gridTemplateRows: "0fr" }
        }
      >
        <div className="overflow-hidden flex relative ">
          <div 
          onClick={()=>{
            setShowSubHeade(false);
          }}
           className="absolute top-4 right-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.04992 7.04962C6.86245 7.23715 6.75713 7.49146 6.75713 7.75662C6.75713 8.02179 6.86245 8.27609 7.04992 8.46362L10.5859 11.9996L7.04992 15.5356C6.95441 15.6279 6.87822 15.7382 6.82582 15.8602C6.77341 15.9822 6.74582 16.1134 6.74467 16.2462C6.74351 16.379 6.76881 16.5107 6.8191 16.6336C6.86938 16.7565 6.94363 16.8681 7.03752 16.962C7.13141 17.0559 7.24307 17.1302 7.36596 17.1804C7.48886 17.2307 7.62054 17.256 7.75332 17.2549C7.8861 17.2537 8.01732 17.2261 8.13932 17.1737C8.26133 17.1213 8.37167 17.0451 8.46392 16.9496L11.9999 13.4136L15.5359 16.9496C15.7245 17.1318 15.9771 17.2326 16.2393 17.2303C16.5015 17.228 16.7523 17.1228 16.9377 16.9374C17.1231 16.752 17.2283 16.5012 17.2306 16.239C17.2329 15.9768 17.1321 15.7242 16.9499 15.5356L13.4139 11.9996L16.9499 8.46362C17.1321 8.27502 17.2329 8.02242 17.2306 7.76022C17.2283 7.49802 17.1231 7.24721 16.9377 7.0618C16.7523 6.8764 16.5015 6.77123 16.2393 6.76895C15.9771 6.76667 15.7245 6.86746 15.5359 7.04962L11.9999 10.5856L8.46392 7.04962C8.27639 6.86215 8.02208 6.75684 7.75692 6.75684C7.49175 6.75684 7.23744 6.86215 7.04992 7.04962Z"
                fill="#333333"
              />
            </svg>
          </div>
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
                <div className="flex gap-2 justify-center items-center hover:underline hover:decoration-[#693ED4]">
                  <button className="text-[#693ED4] text-[16px] font-bold leading-6">
                    See job openings
                  </button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16675 10H15.8334"
                        stroke="#693ED4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4.1665L15.8333 9.99984L10 15.8332"
                        stroke="#693ED4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] bg-white px-[70px] py-8 ">
            <div className="flex flex-col gap-4">
              <div className="text-[12px] font-semibold leading-5 text-[#999] tracking-[0.96px]">
                COMPANY
              </div>
              <Link to="/aboutus">
                <div
                  className="p-[15px] flex flex-col gap-1 cursor-pointer hover:bg-[] hover:rounded-md"
                  style={
                    about
                      ? { background: "#F7F5FF", borderRadius: "6px" }
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
                      ? { background: "#F7F5FF", borderRadius: "6px" }
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

            {about && (
              <div className="flex justify-center items-center gap-5">
                <div className="grid gap-x-3  grid-cols-3 grid-rows-[40%,5%,10%,5%,34%] w-full h-full">
                  <div className="col-span-2 row-end-2">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={HeaderAbout1}
                    />
                  </div>
                  <div className="col-start-3 row-start-1 row-end-4">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={HeaderAbout3}
                    />
                  </div>
                  <div className="col-span-2 row-start-3 row-end-6 ">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={HeaderAbout4}
                    />
                  </div>
                  <div className="row-start-5 row-end-6 ">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={HeaderAbout2}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
