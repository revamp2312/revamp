import CXServiceAccordions from "./CXServiceAccordions";
import XMServiceAccordion from "./XMServiceAccordion";
import DevelopedAppsAccodian from "./DevelopedAppsAccodian";
import { useDispatch, useSelector } from "react-redux";
import { setall } from "../../constants/slices/serviceSlice";
import ServiceDropdown from "./ServiceDropdown";

const AllServices = () => {
 const dispatch=useDispatch()
 const service =useSelector((store)=>store.service)
 const cxService =service.cx;
 const xmService =service.xm;
 const daService =service.da;

  return (
    <div className="flex flex-col justify-center items-center px-6 py-12 tablet:px-14 laptop:p-[70px] gap-8 tablet:gap-20 w-full max-w-[1440px] m-auto">
      <div className="hidden laptop:flex flex-col laptop:flex-row justify-center items-center w-full gap-6 border-b-2 border-solid-[#F3F5FB]">
        <div className="w-full laptop:w-4/12 text-center cursor-pointer " onClick={()=>{dispatch(setall({cx:true,xm:false,da:false}))}} >
          <div
            className="flex gap-6 p-4 justify-center items-center  hover:border-b-2 hover:border-solid hover:border-[#6C52E3] hover:!text-[#693ED4]"
            style={
              cxService
                ? {
                    borderBottom: "2px solid #6C52E3",
                    background:
                      "linear-gradient(180deg, rgba(237, 234, 252, 0.10) 0%, #EDEAFC 100%)",
                    color: "#693ED4",
                  }
                : {
                    color: "#999999",
                  }
            }
          >
            <div
              style={
                cxService
                  ? {
                      background: "white",
                    }
                  : {
                      background: "#F7F5FF",
                    }
              }
              className="w-12 p-2 flex justify-center items-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_2523_7913)">
                  <path
                    d="M16 11C18.7614 11 21 8.76142 21 6C21 3.23858 18.7614 1 16 1C13.2386 1 11 3.23858 11 6C11 8.76142 13.2386 11 16 11Z"
                    fill="#6C52E3"
                  />
                  <path
                    d="M16 1C15.658 1 15.323 1.035 15 1.101C17.279 1.566 19 3.586 19 6C19 8.414 17.279 10.434 15 10.899C15.7263 11.0462 16.4763 11.0302 17.1957 10.8523C17.9151 10.6744 18.586 10.339 19.1601 9.8703C19.7341 9.4016 20.1969 8.81129 20.5151 8.14199C20.8333 7.47268 20.9989 6.74108 21 6C21 3.243 18.757 1 16 1Z"
                    fill="#6C52E3"
                  />
                  <path
                    d="M12 13C9.243 13 7 15.243 7 18V19C7 21.757 9.243 24 12 24C12.2652 24 12.5196 23.8946 12.7071 23.7071C12.8946 23.5196 13 23.2652 13 23V14C13 13.7348 12.8946 13.4804 12.7071 13.2929C12.5196 13.1054 12.2652 13 12 13Z"
                    fill="#DFD9FF"
                  />
                  <path
                    d="M12 13C9.243 13 7 15.243 7 18V19C7 21.757 9.243 24 12 24C12.2652 24 12.5196 23.8946 12.7071 23.7071C12.8946 23.5196 13 23.2652 13 23V14C13 13.7348 12.8946 13.4804 12.7071 13.2929C12.5196 13.1054 12.2652 13 12 13Z"
                    fill="#DFD9FF"
                  />
                  <path
                    d="M20 13C19.7348 13 19.4804 13.1054 19.2929 13.2929C19.1054 13.4804 19 13.7348 19 14V23C19 23.2652 19.1054 23.5196 19.2929 23.7071C19.4804 23.8946 19.7348 24 20 24C22.757 24 25 21.757 25 19V18C25 15.243 22.757 13 20 13Z"
                    fill="#DFD9FF"
                  />
                  <path
                    d="M20 13C19.7348 13 19.4804 13.1054 19.2929 13.2929C19.1054 13.4804 19 13.7348 19 14V23C19 23.2652 19.1054 23.5196 19.2929 23.7071C19.4804 23.8946 19.7348 24 20 24C22.757 24 25 21.757 25 19V18C25 15.243 22.757 13 20 13Z"
                    fill="#DFD9FF"
                  />
                  <path
                    d="M20 13H12C11.7348 13 11.4804 13.1054 11.2929 13.2929C11.1054 13.4804 11 13.7348 11 14V26C11 28.757 13.243 31 16 31C18.757 31 21 28.757 21 26V14C21 13.7348 20.8946 13.4804 20.7071 13.2929C20.5196 13.1054 20.2652 13 20 13Z"
                    fill="#6C52E3"
                  />
                  <path
                    d="M13 7C12.7348 7 12.4804 6.89464 12.2929 6.70711C12.1054 6.51957 12 6.26522 12 6C12 3.794 13.794 2 16 2C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3C17 3.26522 16.8946 3.51957 16.7071 3.70711C16.5196 3.89464 16.2652 4 16 4C14.897 4 14 4.897 14 6C14 6.26522 13.8946 6.51957 13.7071 6.70711C13.5196 6.89464 13.2652 7 13 7Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2523_7913">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <button className="text-xl  font-bold">
                Customer Experience
              </button>
            </div>
          </div>
        </div>
        <div className="w-full laptop:w-4/12 text-center cursor-pointer" onClick={()=>{dispatch(setall({cx:false,xm:true,da:false}))}} >
          <div
            className="flex gap-6 p-4 justify-center items-center hover:border-b-2 hover:border-solid hover:border-[#6C52E3] hover:!text-[#693ED4]"
            style={
              xmService
                ? {
                    borderBottom: "2px solid #6C52E3",
                    background:
                      "linear-gradient(180deg, rgba(237, 234, 252, 0.10) 0%, #EDEAFC 100%)",
                    color: "#693ED4",
                  }
                : {
                    color: "#999999",
                  }
            }
          >
            <div
              style={
                xmService
                  ? {
                      background: "white",
                    }
                  : {
                      background: "#F7F5FF",
                    }
              }
              className="w-12 p-2 flex justify-center items-center  rounded "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M20.7952 23.6935C20.3039 24.2223 19.7439 24.6999 19.1288 25.1152C17.4296 26.2664 15.3032 26.9496 12.9944 26.9496C11.3824 26.9496 9.8592 26.6168 8.50952 26.024C6.59592 27.9736 3.53912 27.796 3.53912 27.796L5.94232 24.4136C4.07672 22.804 2.91992 20.5617 2.91992 18.08C2.91992 15.8727 3.83512 13.8544 5.34952 12.3023C5.88552 11.7536 6.49672 11.2623 7.16872 10.8423C6.76064 11.8695 6.53832 12.9736 6.53832 14.1231C6.53832 19.604 11.5847 24.0464 17.8087 24.0464C18.8432 24.0463 19.844 23.9239 20.7952 23.6935Z"
                  fill="#6C52E3"
                />
                <path
                  d="M22.5154 19.09C22.3402 21.0927 21.3237 22.8552 19.7701 24.1673C18.7956 24.3003 17.7804 24.3275 16.7415 24.2366C10.4901 23.6896 5.78678 19.0701 6.23756 13.9177C6.3321 12.8371 6.6462 11.8187 7.14056 10.889C8.87709 10.0679 10.9453 9.67599 13.1261 9.86678C18.7146 10.3557 22.9183 14.4845 22.5154 19.09Z"
                  fill="url(#paint0_linear_2523_4858)"
                />
                <path
                  d="M25.6989 21.2087L28.3877 24.9935C28.3877 24.9935 24.9668 25.1919 22.8268 23.0112C22.1709 23.2979 21.4909 23.5262 20.7949 23.6935C19.8436 23.9239 18.8429 24.0463 17.8085 24.0463C11.5845 24.0463 6.53809 19.6039 6.53809 14.123C6.53809 12.9735 6.76041 11.8694 7.16849 10.8422C8.70681 6.97351 12.8901 4.19983 17.8085 4.19983C24.0333 4.19983 29.0797 8.64151 29.0797 14.123C29.0797 16.8991 27.7861 19.408 25.6989 21.2087Z"
                  fill="#DFD9FF"
                />
                <path
                  d="M21.1057 14.3114H20.8996C20.3406 14.3114 19.838 14.098 19.3916 13.6713C18.9452 13.2446 18.7221 12.7125 18.7221 12.0749C18.7221 11.447 18.9452 10.9296 19.3916 10.5226C19.838 10.1154 20.3898 9.91199 21.0468 9.91199C21.7628 9.91199 22.3588 10.1989 22.8346 10.7727C23.3104 11.3466 23.5482 12.1632 23.5482 13.2226C23.5482 14.1937 23.3399 15.1034 22.9229 15.9519C22.506 16.8003 21.9959 17.4723 21.3926 17.9678C20.7893 18.4629 20.2523 18.7109 19.7815 18.7109C19.4676 18.7109 19.2224 18.6175 19.0459 18.4312C18.8693 18.2448 18.7809 18.0045 18.7809 17.7103C18.7809 17.2785 18.9724 16.9598 19.3548 16.7538C19.8748 16.4692 20.2868 16.1358 20.5908 15.7533C20.895 15.3707 21.0667 14.89 21.1057 14.3114ZM15.2244 14.3114H15.0331C14.4839 14.3114 13.986 14.098 13.5396 13.6713C13.0934 13.2446 12.8701 12.7125 12.8701 12.0749C12.8701 11.4569 13.0934 10.9369 13.5396 10.5153C13.986 10.0934 14.538 9.88263 15.1949 9.88263C15.9208 9.88263 16.5192 10.1769 16.99 10.7653C17.4608 11.3539 17.6961 12.1729 17.6961 13.2226C17.6961 13.9777 17.5736 14.6889 17.3283 15.3561C17.0833 16.023 16.7668 16.6042 16.3792 17.0997C15.9919 17.5949 15.5752 17.9873 15.1286 18.2768C14.6824 18.5661 14.2825 18.7109 13.9296 18.7109C13.6058 18.7109 13.3581 18.6201 13.1864 18.4386C13.0148 18.257 12.9289 18.0143 12.9289 17.7104C12.9289 17.2689 13.1202 16.95 13.5027 16.7539C14.0424 16.4497 14.4496 16.1139 14.724 15.746C14.9988 15.3781 15.1656 14.8998 15.2244 14.3114Z"
                  fill="#6C52E3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2523_4858"
                    x1="14.9432"
                    y1="10.0258"
                    x2="13.723"
                    y2="23.9726"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.394" stopColor="#6C52E3" />
                    <stop offset="1" stopColor="#B640FA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <button className="text-xl  font-bold">
                Experience Management
              </button>
            </div>
          </div>
        </div>
        <div className="w-full laptop:w-4/12 text-center cursor-pointer" onClick={()=>{dispatch(setall({cx:false,xm:false,da:true}))}} >
          <div
            className="flex gap-6 p-4 justify-center items-center  hover:border-b-2 hover:border-solid hover:border-[#6C52E3] hover:!text-[#693ED4]"
            style={
              daService
                ? {
                    borderBottom: "2px solid #6C52E3",
                    background:
                      "linear-gradient(180deg, rgba(237, 234, 252, 0.10) 0%, #EDEAFC 100%)",
                    color: "#693ED4",
                  }
                : {
                    color: "#999999",
                  }
            }
          >
            <div
              style={
                daService
                  ? {
                      background: "white",
                    }
                  : {
                      background: "#F7F5FF",
                    }
              }
              className="w-12 p-2 flex justify-center items-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M7.75456 2.66666C5.23588 2.66666 3.16602 4.73652 3.16602 7.2552V10.0781C3.16602 12.5968 5.23589 14.6667 7.75456 14.6667H10.5775C13.0961 14.6667 15.166 12.5968 15.166 10.0781V7.2552C15.166 4.73652 13.0962 2.66666 10.5775 2.66666H7.75456ZM7.75456 17.3333C5.23588 17.3333 3.16602 19.4032 3.16602 21.9219V24.7448C3.16602 27.2635 5.23589 29.3333 7.75456 29.3333H10.5775C13.0961 29.3333 15.166 27.2635 15.166 24.7448V21.9219C15.166 19.4032 13.0962 17.3333 10.5775 17.3333H7.75456ZM22.4212 17.3333C19.9025 17.3333 17.8327 19.4032 17.8327 21.9219V24.7448C17.8327 27.2635 19.9026 29.3333 22.4212 29.3333H25.2441C27.7628 29.3333 29.8327 27.2635 29.8327 24.7448V21.9219C29.8327 19.4032 27.7628 17.3333 25.2441 17.3333H22.4212Z"
                  fill="#6C52E3"
                />
                <path
                  d="M23.832 2.66666C23.4784 2.66666 23.1393 2.80715 22.8892 3.0572C22.6392 3.30725 22.4987 3.64637 22.4987 3.99999V7.33332H19.1654C18.8117 7.33332 18.4726 7.47382 18.2226 7.72387C17.9725 7.97392 17.832 8.31303 17.832 8.66666C17.832 9.02028 17.9725 9.35944 18.2226 9.60949C18.4726 9.85954 18.8117 9.99999 19.1654 9.99999H22.4987V13.3333C22.4987 13.6869 22.6392 14.0261 22.8892 14.2762C23.1393 14.5262 23.4784 14.6667 23.832 14.6667C24.1857 14.6667 24.5248 14.5262 24.7748 14.2762C25.0249 14.0261 25.1654 13.6869 25.1654 13.3333V9.99999H28.4987C28.8523 9.99999 29.1915 9.85954 29.4415 9.60949C29.6916 9.35944 29.832 9.02028 29.832 8.66666C29.832 8.31303 29.6916 7.97392 29.4415 7.72387C29.1915 7.47382 28.8523 7.33332 28.4987 7.33332H25.1654V3.99999C25.1654 3.64637 25.0249 3.30725 24.7748 3.0572C24.5248 2.80715 24.1857 2.66666 23.832 2.66666Z"
                  fill="#6C52E3"
                />
              </svg>
            </div>
            <div>
              <button className="text-xl font-bold">Blink CX Apps</button>
            </div>
          </div>
        </div>

      </div>
       <ServiceDropdown />
  

      <div>
        {cxService && <CXServiceAccordions />}
        {xmService && <XMServiceAccordion />}
        {daService && <DevelopedAppsAccodian />}
      </div>
    </div>
  );
};

export default AllServices;
