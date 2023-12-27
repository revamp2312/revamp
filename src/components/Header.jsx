import Logo from "./Logo";
import "./css/header.css";
import "./css/mediaqureries.css"
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
    showSideBar,
    handleShowSideBar,
    handleHideSideBar,
    showCompanySubOption,
    handleShowCompanySubOption,
  } = useHeaderdata();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setShowSubHeade(false);
  }, [pathname]);

  return (
    <>
      <div className="header-container relative w-[100%] m-auto max-w-[1440px] h-[90px] flex justify-center items-center py-0 px-6 tablet:px-14 laptop:px-[70px] border-b-[1px] border-solid border-[#D6DEE5] ">
        <div className="large-device-header header-wrapper  w-[100%] flex justify-between h-full">
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
                  style={
                    showSubHeader ? { color: "#693ED4" } : { color: "#333333" }
                  }
                  className="cursor-pointer  text-[#333333] h-full flex justify-center items-center  text-[14px] font-normal hover:text-[#693ED4] relative after:h-[2px] after:w-full after:absolute after:bg-transparent after:hover:bg-[#693ED4] after:bottom-0 after:left-0"
                >
                  Company
                  <div
                    style={
                      showSubHeader
                        ? { background: "#693ED4" }
                        : { background: "#fff" }
                    }
                    className="absolute bottom-0 w-full bg-[#693ED4] h-[2px]"
                  ></div>
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
        <div className="small-device-header w-[100%]  hidden justify-between items-center h-full">
          <div className="w-24 logo">
            <Logo />
          </div>
          <div onClick={handleShowSideBar} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <g clipPath="url(#clip0_2892_6875)">
                <path
                  d="M36.7583 20.1665H7.24167C6.27977 20.1665 5.5 20.9463 5.5 21.9082V22.0915C5.5 23.0534 6.27977 23.8332 7.24167 23.8332H36.7583C37.7202 23.8332 38.5 23.0534 38.5 22.0915V21.9082C38.5 20.9463 37.7202 20.1665 36.7583 20.1665Z"
                  fill="url(#paint0_linear_2892_6875)"
                />
                <path
                  d="M36.7583 29.3335H7.24167C6.27977 29.3335 5.5 30.1133 5.5 31.0752V31.2585C5.5 32.2204 6.27977 33.0002 7.24167 33.0002H36.7583C37.7202 33.0002 38.5 32.2204 38.5 31.2585V31.0752C38.5 30.1133 37.7202 29.3335 36.7583 29.3335Z"
                  fill="url(#paint1_linear_2892_6875)"
                />
                <path
                  d="M36.7583 11H7.24167C6.27977 11 5.5 11.7798 5.5 12.7417V12.925C5.5 13.8869 6.27977 14.6667 7.24167 14.6667H36.7583C37.7202 14.6667 38.5 13.8869 38.5 12.925V12.7417C38.5 11.7798 37.7202 11 36.7583 11Z"
                  fill="url(#paint2_linear_2892_6875)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_2892_6875"
                  x1="5.5"
                  y1="20.1665"
                  x2="6.30488"
                  y2="27.4104"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#693ED4" />
                  <stop offset="1" stopColor="#A31EBE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2892_6875"
                  x1="5.5"
                  y1="29.3335"
                  x2="6.30488"
                  y2="36.5774"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#693ED4" />
                  <stop offset="1" stopColor="#A31EBE" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2892_6875"
                  x1="5.5"
                  y1="11"
                  x2="6.30488"
                  y2="18.2439"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#693ED4" />
                  <stop offset="1" stopColor="#A31EBE" />
                </linearGradient>
                <clipPath id="clip0_2892_6875">
                  <rect width="44" height="44" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div
          style={
            showSideBar
              ? {
                  background:
                    "linear-gradient(135deg, rgb(105, 62, 212) 0%, rgb(163, 30, 190) 100%)",
                  transform: "translateX(0)",
                }
              : {
                  background:
                    "linear-gradient(135deg, rgb(105, 62, 212) 0%, rgb(163, 30, 190) 100%)",
                  transform: "translateX(100%)",
                }
          }
          className="sidebar fixed top-0 right-0 max-w-[400px] transition-transform duration-500 min-w-[250px] h-full  px-4 py-6 z-[100000] flex  flex-col gap-4  "
        >
          <div className="flex justify-end items-center">
            <div onClick={handleHideSideBar} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.7715 8.22864L7.54297 16.4572"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.54297 8.22864L15.7715 16.4572"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4 text-white">
              <Link to="/">
                <li>Home</li>
              </Link>
              <div  onClick={handleShowCompanySubOption} className="cursor-pointer flex flex-col">
              <div className="flex justify-between items-center">
                <li>
                  Company
                
                </li>
                <div>
                  <svg
                  style={showCompanySubOption?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}}
                  className="transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.9662 9.51721L12.0007 14.4827L7.03516 9.51721"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
           
              </div>
              <div
                    className="grid  transition-[grid-template-rows]"
                    style={
                      showCompanySubOption
                        ? { gridTemplateRows: "1fr", visibility: "visible",paddingTop:"8px" }
                        : { gridTemplateRows: "0fr", visibility: "hidden",paddingTop:"0px" }
                    }
                  >
                    <div className="overflow-hidden flex flex-col gap-2 ml-4 ">
                     <Link to="/aboutus" ><li>About Us</li></Link> 
                     <Link to="/eventsandupdates" ><li>Events and Updates</li></Link>
                    </div>
                  </div>
              </div>
              

              <Link to="/services">
                <li>Service</li>
              </Link>
              <Link to="/partners">
                <li>Partners</li>
              </Link>
              <Link to="/contact">
                <li>Contact Us</li>
              </Link>
            </ul>
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
        <div className="overflow-hidden flex w-full relative flex-col-reverse laptop:flex-row ">
          <div
            onClick={() => {
              setShowSubHeade(false);
            }}
            className="absolute top-4 right-4 cursor-pointer"
          >
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
          <div className="w-full laptop:w-[28%]">
            <div className="w-full flex  items-start py-12 pl-[70px]">
              <div className=" flex flex-col gap-12 ">
                <div className="flex flex-col gap-2">
                  <div className="text-[16px] text-[#333] leading-5">
                    Careers
                  </div>
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
          </div>
          <div className="w-full laptop:w-[72%] flex">
            <div className="w-full bg-white px-14 laptop:px-[70px] py-8 ">
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

            <div className="w-full px-14 laptop:px-[70px] py-8 bg-[white]">
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
      </div>
    </>
  );
};

export default Header;
