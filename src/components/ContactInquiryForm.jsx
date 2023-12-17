import { useState } from "react";
import "./css/whatsetsapart.css"
const ContactInquiryForm = () => {
  const [reasonActive, setReasonActive] = useState(true);
  const [inquiryActive, setInquiryActive] = useState(false);
  const [informationActive, setInformationActive] = useState(false);
  const [formSubmitted, setFormSubmittted] = useState(false);
  const [reasonSelected,setReasonSelected]=useState(null)

  const handleInquiryActive = () => {
    setInquiryActive(true);
    setReasonActive(false);
    setInformationActive(false);
  };
  const handleReasonActive = () => {
    setInquiryActive(false);
    setReasonActive(true);
    setInformationActive(false);
  };
  const handleInformationActive = () => {
    setInquiryActive(false);
    setReasonActive(false);
    setInformationActive(true);
  };
  const handleFormSubmit = () => {
    setFormSubmittted(true);
    setInquiryActive(false);
    setReasonActive(true);
    setInformationActive(false);
  };

  return (
    <div className="max-w-[1400opx] w-full flex justify-center items-center m-auto  py-12 ">
      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <div className="flex gap-6 justify-center items-center">
          <div className="flex gap-2 cursor-pointer">
            <div
              style={
                reasonActive
                  ? { background: "#693ED4" }
                  : { background: "transparent" }
              }
              className="rounded-[50%] bg-[#693ED4] p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M14.75 19.5L8.75 23.25L10.25 19.5C7.86305 19.5 5.57387 18.5518 3.88604 16.864C2.19821 15.1761 1.25 12.8869 1.25 10.5V9.75C1.25 7.36305 2.19821 5.07387 3.88604 3.38604C5.57387 1.69821 7.86305 0.75 10.25 0.75H14.75C17.1369 0.75 19.4261 1.69821 21.114 3.38604C22.8018 5.07387 23.75 7.36305 23.75 9.75V10.5C23.75 12.8869 22.8018 15.1761 21.114 16.864C19.4261 18.5518 17.1369 19.5 14.75 19.5Z"
                  fill="#DFD9FF"
                />
                <path
                  d="M15.875 12.75V13.5C15.8745 15.4869 15.2165 17.4177 14.0036 18.9915C12.7907 20.5652 11.0912 21.6933 9.17001 22.2L10.25 19.5C7.86306 19.5 5.57387 18.5518 3.88605 16.864C2.19822 15.1761 1.25001 12.8869 1.25001 10.5V9.75C1.24699 7.53506 2.0646 5.39753 3.54501 3.75H6.87501C9.26196 3.75 11.5511 4.69821 13.239 6.38604C14.9268 8.07387 15.875 10.3631 15.875 12.75Z"
                  fill="#E9E3FF"
                />
                <path
                  d="M13.25 8.25C13.25 7.83579 12.9142 7.5 12.5 7.5C12.0858 7.5 11.75 7.83579 11.75 8.25V15C11.75 15.4142 12.0858 15.75 12.5 15.75C12.9142 15.75 13.25 15.4142 13.25 15V8.25Z"
                  fill="#693ED4"
                />
                <path
                  d="M12.5 6C12.9142 6 13.25 5.66421 13.25 5.25C13.25 4.83579 12.9142 4.5 12.5 4.5C12.0858 4.5 11.75 4.83579 11.75 5.25C11.75 5.66421 12.0858 6 12.5 6Z"
                  fill="#693ED4"
                />
              </svg>
            </div>
            <div className="flex gap-6 justify-center items-center">
              <div
                style={
                  reasonActive
                    ? { color: "#693ED4", fontWeight: "600" }
                    : { color: "#666", fontWeight: "400" }
                }
                className="text-base"
              >
                Reason for contacting
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="6"
                  viewBox="0 0 28 6"
                  fill="none"
                >
                  <path
                    d="M21.8333 3C21.8333 4.47276 23.0272 5.66667 24.5 5.66667C25.9728 5.66667 27.1667 4.47276 27.1667 3C27.1667 1.52724 25.9728 0.333333 24.5 0.333333C23.0272 0.333333 21.8333 1.52724 21.8333 3ZM0.5 3.5H24.5V2.5H0.5V3.5Z"
                    fill="#693ED4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <div
              style={
                inquiryActive
                  ? { background: "#693ED4" }
                  : { background: "transparent" }
              }
              className="rounded-[50%] p-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M18.9508 21.75H4.55078C4.10078 21.75 3.80078 21.45 3.80078 21C3.80078 20.775 3.87578 20.625 4.02578 20.475L5.52578 18.975C5.67578 18.825 5.82578 18.75 6.05078 18.75H20.4508C20.9008 18.75 21.2008 19.05 21.2008 19.5C21.2008 19.725 21.1258 19.875 20.9758 20.025L19.4758 21.525C19.3258 21.675 19.1758 21.75 18.9508 21.75Z"
                  fill="#DFD9FF"
                />
                <path
                  d="M18.95 21.75H12.5V18.75H20.45C20.9 18.75 21.2 19.05 21.2 19.5C21.2 19.725 21.125 19.875 20.975 20.025L19.475 21.525C19.325 21.675 19.175 21.75 18.95 21.75Z"
                  fill="#693ED4"
                />
                <path
                  d="M9.20078 14.85L9.80078 13.05L12.5758 10.2L14.0758 8.69998L16.1008 6.59998L18.2758 8.69998L14.0008 13.05L12.5008 14.625L11.9008 15.225L10.1758 15.825C9.80078 15.975 9.35078 15.75 9.20078 15.375C9.12578 15.225 9.12578 15 9.20078 14.85ZM20.2258 3.44998L21.2758 4.49998C21.5758 4.79998 21.5758 5.24998 21.2758 5.54998L19.7008 7.12498L17.5258 5.02498L19.1008 3.44998C19.4758 3.14998 19.9258 3.14998 20.2258 3.44998Z"
                  fill="#DFD9FF"
                />
                <path
                  d="M12.5 10.275L14 8.77499L16.025 6.67499L18.2 8.77499L14 13.05L12.5 14.55V10.275Z"
                  fill="#DFD9FF"
                />
                <path
                  d="M20.2254 3.44998L21.2754 4.49998C21.5754 4.79998 21.5754 5.24998 21.2754 5.54998L19.7004 7.12498L17.5254 5.02498L19.1004 3.44998C19.4754 3.14998 19.9254 3.14998 20.2254 3.44998Z"
                  fill="#9C7DE9"
                />
              </svg>
            </div>
            <div className="flex gap-6 justify-center items-center">
              <div
                style={
                  inquiryActive
                    ? { color: "#693ED4", fontWeight: "600" }
                    : { color: "#666", fontWeight: "400" }
                }
                className="text-base"
              >
                Inquiry subject
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="6"
                  viewBox="0 0 28 6"
                  fill="none"
                >
                  <path
                    d="M21.8333 3C21.8333 4.47276 23.0272 5.66667 24.5 5.66667C25.9728 5.66667 27.1667 4.47276 27.1667 3C27.1667 1.52724 25.9728 0.333333 24.5 0.333333C23.0272 0.333333 21.8333 1.52724 21.8333 3ZM0.5 3.5H24.5V2.5H0.5V3.5Z"
                    fill="#693ED4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <div
              style={
                informationActive
                  ? { background: "#693ED4" }
                  : { background: "transparent" }
              }
              className="rounded-[50%] p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.5 10C14.7091 10 16.5 8.20914 16.5 6C16.5 3.79086 14.7091 2 12.5 2C10.2909 2 8.5 3.79086 8.5 6C8.5 8.20914 10.2909 10 12.5 10Z"
                  fill="#C7B0FF"
                />
                <path
                  d="M20.9998 18.1C19.7998 14.4 16.2998 12 12.4998 12C8.69975 12 5.19975 14.4 3.99975 18.1C3.69975 19 3.79975 20 4.39975 20.8C4.99975 21.5 5.89975 22 6.79975 22H18.0998C19.0998 22 19.9998 21.5 20.5998 20.7C21.1998 19.9 21.2998 19 20.9998 18.1Z"
                  fill="#C7B0FF"
                />
                <path
                  d="M16.5 6C16.5 3.8 14.7 2 12.5 2V10C14.7 10 16.5 8.2 16.5 6Z"
                  fill="#C7B0FF"
                />
                <path
                  d="M20.6 20.7C21.2 19.9 21.3 18.9 21 18C19.8 14.4 16.3 12 12.5 12V22H18.2C19.1 22 20 21.5 20.6 20.7Z"
                  fill="#C7B0FF"
                />
              </svg>
            </div>
            <div className="flex gap-6 justify-center items-center">
              <div
                style={
                  informationActive
                    ? { color: "#693ED4", fontWeight: "600" }
                    : { color: "#666", fontWeight: "400" }
                }
                className="text-base "
              >
                Your information
              </div>
            </div>
          </div>
        </div>

        {formSubmitted && (
          <div className="max-w-[637px] flex gap-2 justify-center items-center px-5 py-4 border-[#693ED4] border-solid border-[1px] bg-[#FCFBFF] rounded">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clipPath="url(#clip0_1251_11941)">
                  <path
                    d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z"
                    fill="#9571EE"
                  />
                  <path
                    d="M15.0242 23.7171C15.2543 23.6725 15.4831 23.6211 15.7102 23.5631C16.0953 23.4555 16.4748 23.3286 16.8472 23.1831C17.2201 23.0388 17.5856 22.8759 17.9422 22.6951C18.2989 22.5136 18.6464 22.3143 18.9832 22.0981C19.3196 21.8818 19.645 21.6489 19.9582 21.4001C20.2719 21.151 20.573 20.8863 20.8602 20.6071C21.147 20.3286 21.4196 20.0359 21.6772 19.7301C21.935 19.4241 22.1773 19.1053 22.4032 18.7751C22.6291 18.4454 22.8383 18.1047 23.0302 17.7541C23.2221 17.403 23.3963 17.0426 23.5522 16.6741C23.7082 16.3055 23.8457 15.9294 23.9642 15.5471C24.0656 15.2124 24.1524 14.8734 24.2242 14.5311L17.0942 7.4021C16.4921 6.7973 15.7763 6.31755 14.988 5.99044C14.1998 5.66334 13.3546 5.49533 12.5012 5.4961C11.647 5.49517 10.801 5.66307 10.012 5.99017C9.22287 6.31727 8.50622 6.79711 7.9032 7.4021C7.29866 8.00531 6.81904 8.72183 6.49179 9.51065C6.16454 10.2995 5.99609 11.1451 5.99609 11.9991C5.99609 12.8531 6.16454 13.6987 6.49179 14.4875C6.81904 15.2764 7.29866 15.9929 7.9032 16.5961L15.0242 23.7171Z"
                    fill="#693ED4"
                  />
                  <path
                    d="M12.5012 5.49707C14.1632 5.49707 15.8252 6.13207 17.0972 7.40307C17.7017 8.00628 18.1814 8.72281 18.5086 9.51163C18.8359 10.3004 19.0043 11.1461 19.0043 12.0001C19.0043 12.8541 18.8359 13.6997 18.5086 14.4885C18.1814 15.2773 17.7017 15.9939 17.0972 16.5971C16.494 17.2016 15.7775 17.6812 14.9886 18.0085C14.1998 18.3357 13.3542 18.5042 12.5002 18.5042C11.6462 18.5042 10.8006 18.3357 10.0118 18.0085C9.22293 17.6812 8.50641 17.2016 7.9032 16.5971C7.29866 15.9939 6.81904 15.2773 6.49179 14.4885C6.16454 13.6997 5.99609 12.8541 5.99609 12.0001C5.99609 11.1461 6.16454 10.3004 6.49179 9.51163C6.81904 8.72281 7.29866 8.00628 7.9032 7.40307C8.50622 6.79808 9.22287 6.31825 10.012 5.99115C10.801 5.66405 11.647 5.49614 12.5012 5.49707ZM15.4612 9.99907C15.3665 10.0081 15.2764 10.0439 15.2012 10.1021L11.5472 12.8421L9.8542 11.1501C9.4872 10.7681 8.7642 11.4901 9.1472 11.8571L11.1472 13.8571C11.2339 13.9391 11.3463 13.9885 11.4653 13.9971C11.5843 14.0057 11.7026 13.9728 11.8002 13.9041L15.8002 10.9041C16.1362 10.6591 15.9292 10.0061 15.5132 10.0001C15.4962 9.99921 15.4792 9.99921 15.4622 10.0001L15.4612 9.99907Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1251_11941">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-base">
              Thank you for reaching out! Your inquiry has been received and
              will be addressed shortly.
            </div>
          </div>
        )}

        {reasonActive && (
          <div className="flex flex-col gap-12 justify-center items-center">
            <div>
              <div>
                <h3>
                  Select reason for contacting
                  <span className="text-[#FF8488]">*</span>
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-8">
              <div 
              style={reasonSelected==0?{borderColor:"#693ED4",background:"#F7F5FF"}:{borderColor:"#D6DEE5",background:"#FFF"}}
               className=" flex justify-center items-center p-6 rounded-lg border-[1px] border-solid  ">
                <label 
                onClick={()=>{
                  setReasonSelected(0)
                }}
                  className="second relative cursor-pointer" htmlFor="check-box-1">
                  <div className="third flex gap-2  items-center w-[372px]">
                    <div className="fourth p-3 flex justify-center items-center relative">
                      <input
                       style={reasonSelected==0?{background:"#693ED4"}:{background:"white"}}
                        id="check-box-1"
                        className="w-6 h-6  border-[1px] border-solid border-[#333] appearance-none z-[2]"
                        type="checkbox"
                      />
                    <div 
                    style={reasonSelected==0?{opacity:"1"}:{opacity:"0"}}
                    className="check-1 absolute left-3 z-[2]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div 
                     style={reasonSelected==0?{scale:"1.7"}:{scale:"1"}}
                    className="check-1-bg absolute left-3 w-6 h-6 bg-gray-200 rounded-[50%] z-[1] transition-all duration-500 scale-100 "></div>
                    </div>
                    <div>General Inquiry</div>
                  </div>
                </label>
              </div>
              <div
              style={reasonSelected==1?{borderColor:"#693ED4",background:"#F7F5FF"}:{borderColor:"#D6DEE5",background:"#FFF"}}
               className="flex justify-center items-center p-6 rounded-lg border-[1px] border-solid  ">
              <label 
                onClick={()=>{
                  setReasonSelected(1)
                }}
               className="second relative cursor-pointer" htmlFor="check-box-2">
                  <div className="third flex gap-2  items-center w-[372px]">
                    <div className="fourth p-3 flex justify-center items-center relative">
                      <input
                       style={reasonSelected==1?{background:"#693ED4"}:{background:"white"}}
                        id="check-box-2"
                        className="w-6 h-6  border-[1px] border-solid border-[#333] appearance-none z-[2]"
                        type="checkbox"
                      />
                    <div
                     style={reasonSelected==1?{opacity:"1"}:{opacity:"0"}}
                     className="check-2 absolute left-3 z-[2] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                     style={reasonSelected==1?{scale:"1.7"}:{scale:"1"}}
                     className="check-2-bg absolute left-3 w-6 h-6 bg-gray-200 rounded-[50%] z-[1] transition-all duration-500 scale-100  hover:scale-150"></div>
                    </div>
                    <div>Solutions and Services</div>
                  </div>
                </label>
              </div>
              <div 
              style={reasonSelected==2?{borderColor:"#693ED4",background:"#F7F5FF"}:{borderColor:"#D6DEE5",background:"#FFF"}}
              className="flex justify-center items-center p-6 rounded-lg border-[1px] border-solid  ">
              <label 
                onClick={()=>{
                  setReasonSelected(2)
                }}
               className="second relative cursor-pointer" htmlFor="check-box-3">
                  <div className="third flex gap-2  items-center w-[372px]">
                    <div className="fourth p-3 flex justify-center items-center relative">
                      <input
                      style={reasonSelected==2?{background:"#693ED4"}:{background:"white"}}
                        id="check-box-3"
                        className="w-6 h-6  border-[1px] border-solid border-[#333] appearance-none z-[2]"
                        type="checkbox"
                      />
                    <div
                     style={reasonSelected==2?{opacity:"1"}:{opacity:"0"}}
                     className="check-3 absolute left-3 z-[2] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div 
                     style={reasonSelected==2?{scale:"1.7"}:{scale:"1"}}
                    className="check-3-bg absolute left-3 w-6 h-6 bg-gray-200 rounded-[50%] z-[1] transition-all duration-500 scale-100 "></div>
                    </div>
                    <div>CX Consultation</div>
                  </div>
                 </label>
              </div>
           
              <div
              style={reasonSelected==3?{borderColor:"#693ED4",background:"#F7F5FF"}:{borderColor:"#D6DEE5",background:"#FFF"}}
               className="flex justify-center items-center p-6 rounded-lg border-[1px] border-solid  ">
              <label
                onClick={()=>{
                  setReasonSelected(3)
                }}
                className="second relative cursor-pointer" htmlFor="check-box-4">
                  <div className="third flex gap-2  items-center w-[372px]">
                    <div className="fourth p-3 flex justify-center items-center relative">
                      <input
                       style={reasonSelected==3?{background:"#693ED4"}:{background:"white"}}
                        id="check-box-4"
                        className="w-6 h-6  border-[1px] border-solid border-[#333] appearance-none z-[2]"
                        type="checkbox"
                      />
                    <div
                     style={reasonSelected==3?{opacity:"1"}:{opacity:"0"}}
                     className="check-4 absolute left-3 z-[2]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                     style={reasonSelected==3?{scale:"1.7"}:{scale:"1"}}
                     className="check-4-bg absolute left-3 w-6 h-6 bg-gray-200 rounded-[50%] z-[1] transition-all duration-500 scale-100 "></div>
                    </div>
                    <div>Others</div>
                  </div>
                 </label>
              </div>
            </div>
            <div>
              <button
                onClick={handleInquiryActive}
                className="bg-[#693ED4] px-12 py-4 rounded-lg text-[#FFFDFA] text-base font-semibold"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {inquiryActive && (
          <div className="flex flex-col gap-8 w-full justify-center items-center">
            <div>
              <h3>Subject of inquiry</h3>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <textarea
                  className="w-[860px] px-5 py-3 rounded border-[#D6DEE5] border-[1px] border-solid "
                  name=""
                  id=""
                  placeholder="Feel free to use this space to provide us with more details to ensure your inquiry is tailored precisely to your needs."
                ></textarea>
              </div>
              <div>
                <p>Attachments (optional)</p>
              </div>
              <div
                onDrop={() => {
                  console.log("file dropped");
                }}
                className="max-w-[860px] bg-[#F7F5FF] flex justify-center items-center px-4 py-5 border-[1px] border-dashed border-[#BAC4CC] rounded"
              >
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      const input = document.querySelector(".file-input");
                      input.click();
                    }}
                    className="text-[#693ED4] underline"
                  >
                    Add File
                  </button>
                  <input className="file-input" type="file" hidden />
                  <p> or drop files here</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <button
                onClick={handleReasonActive}
                className="bg-[#F7F5FF] border-[1px] border-solid border-[#693ED4] px-12 py-4 rounded-lg text-[#693ED4] text-base font-semibold"
              >
                Previous
              </button>

              <button
                onClick={handleInformationActive}
                className="bg-[#693ED4] px-12 py-4 rounded-lg text-[#FFFDFA] text-base font-semibold"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {informationActive && (
          <div className="flex justify-center items-center w-full ">
            <div className="flex flex-col gap-12 w-full justify-center items-center">
              <div className="flex justify-start items-center w-full">
                <h3>Safely share your information</h3>
              </div>
              <div className="w-full">
                <form action="">
                  <div className="grid grid-cols-2 gap-x-5 gap-y-8">
                    <div className="flex flex-col gap-[10px] ">
                      <div>
                        <p>
                          Full name<span className="text-[#FF8488]">*</span>
                        </p>
                      </div>
                      <input
                        className="text-[#B5BDC5] rounded border-[1px] border-[#D6DEE] px-5 py-3"
                        type="text"
                        placeholder="Robert Cruz"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <div>
                        <p>
                          Email Address<span className="text-[#FF8488]">*</span>
                        </p>
                      </div>
                      <input
                        className="text-[#B5BDC5] rounded border-[1px] border-[#D6DEE] px-5 py-3"
                        type="text"
                        placeholder="robertc@gmail.com"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <div>
                        <p>Company</p>
                      </div>
                      <input
                        className="text-[#B5BDC5] rounded border-[1px] border-[#D6DEE] px-5 py-3"
                        type="text"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <div>
                        <p>Contact Number</p>
                      </div>
                      <input
                        className="text-[#B5BDC5] rounded border-[1px] border-[#D6DEE] px-5 py-3"
                        type="text"
                        placeholder="+639 123456789"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="text-sm text-[#666] max-w-[860px]">
                By submitting this form, you confirm that you agree to the
                storing and processing of your personal data by Blink CX as
                described in the{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
              </div>
              <div className="flex gap-6">
                <button
                  onClick={handleInquiryActive}
                  className="bg-[#F7F5FF] border-[1px] border-solid border-[#693ED4] px-12 py-4 rounded-lg text-[#693ED4] text-base font-semibold"
                >
                  Previous
                </button>

                <button
                  onClick={handleFormSubmit}
                  className="bg-[#693ED4] px-12 py-4 rounded-lg text-[#FFFDFA] text-base font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInquiryForm;
