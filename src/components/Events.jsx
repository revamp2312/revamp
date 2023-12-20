import { events } from "../constants/utils";

const Events = () => {
  return (
    <div
      className="events-container w-full max-w-[1440px] m-auto flex justify-center items-center p-6 tablet:p-14 laptop:p-[70px]"
      style={{ background: "linear-gradient(180deg, #f7f5ff 0%, #fff 100%)" }}
    >
      <div className="event-wrapper w-full flex flex-col gap-14">
        <div className="top flex flex-col gap-2">
          <div className="heading max-w-[750px]">
            <p className="text-[#666666]">WHAT'S NEW</p>
          </div>
          <div className="title max-w-[749px]">
            <h2>Stay in the Loop: Company Updates, News, Events, and More!</h2>
          </div>
        </div>
        <div className="bottom flex flex-col laptop:flex-row  gap-9 rounded">
          <div
            className="left flex flex-col gap-9 bg-white w-full laptop:w-6/12 rounded "
            style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="imgContainer">
              <img src={events} />
            </div>
            <div className="flex flex-col gap-2">

            <div className="eventContainer pt-0 px-5 pb-6 flex flex-col gap-4 border-b-[1px] border-solid border-[#e8e7ee]">
              <div className="read-time w-max py-1 px-3 flex items-center gap-2 rounded bg-[#f7f5ff] mix-blend-multiply">
                <div className="tag py-[2px] px-2 bg-white text-[#693ed4] text-center text-xs font-normal leading-5">
                  Event
                </div>
                <div className="time text-[#693ed4] text-xs font-normal leading-5">
                  4 min read
                </div>
              </div>

              <div className="date">September 28, 2023 • Thursday, 9:00 AM</div>

              <div className="event-title">
                <h3>The CX Next Phil Summit 2023</h3>
              </div>

              <div className="event-description">
                <p className="text-[#666] font-normal leading-6">
                  Blink CX and Zendesk are thrilled to join and participate in
                  this year CX Next Phil Summit 2023!
                </p>
              </div>
            </div>
            <div className="readmore pt-0 px-5 pb-2 flex gap-[10px] items-center cursor-pointer">
              <button className="flex h-14 py-2 flex-col justify-center items-center gap-2 text-[#6c52e3] bg-transparent border-none ">
                Read More
              </button>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.4301 18.8201C14.2401 18.8201 14.0501 18.7501 13.9001 18.6001C13.7606 18.459 13.6824 18.2685 13.6824 18.0701C13.6824 17.8717 13.7606 17.6813 13.9001 17.5401L19.4401 12.0001L13.9001 6.46012C13.7606 6.31898 13.6824 6.12855 13.6824 5.93012C13.6824 5.73169 13.7606 5.54125 13.9001 5.40012C14.1901 5.11012 14.6701 5.11012 14.9601 5.40012L21.0301 11.4701C21.3201 11.7601 21.3201 12.2401 21.0301 12.5301L14.9601 18.6001C14.8101 18.7501 14.6201 18.8201 14.4301 18.8201Z"
                    fill="#6C52E3"
                  />
                  <path
                    d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25L20.33 11.25C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                    fill="#6C52E3"
                  />
                </svg>
              </div>
            </div>
            </div>
          </div>
          <div className="right w-full laptop:w-6/12 flex flex-col items-center justify-between gap-6">
            <div
              className="each-event cursor-pointer w-full flex justify-between items-center bg-white py-6 px-4 tablet:px-[30px] rounded"
              style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className=" flex flex-col gap-4">
                <div className="date text-[#313131] text-sm font-normal">
                  September 22, 2023 • 5 min read
                </div>
                <div className="heading text-[#1c2436] text-lg font-semibold">
                  Exciting News! Blink CX is Expanding to Singapore!
                </div>
                <div className="content text-[#5b616e] text-base font-normal ">
                  Breaking News! Blink CX is now in Singapore!{" "}
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M14.4298 19.3201C14.2398 19.3201 14.0498 19.2501 13.8998 19.1001C13.7603 18.959 13.6821 18.7685 13.6821 18.5701C13.6821 18.3717 13.7603 18.1813 13.8998 18.0401L19.4398 12.5001L13.8998 6.96012C13.7603 6.81898 13.6821 6.62855 13.6821 6.43012C13.6821 6.23169 13.7603 6.04125 13.8998 5.90012C14.1898 5.61012 14.6698 5.61012 14.9598 5.90012L21.0298 11.9701C21.3198 12.2601 21.3198 12.7401 21.0298 13.0301L14.9598 19.1001C14.8098 19.2501 14.6198 19.3201 14.4298 19.3201Z"
                    fill="#6C52E3"
                  />
                  <path
                    d="M20.33 13.25H3.5C3.09 13.25 2.75 12.91 2.75 12.5C2.75 12.09 3.09 11.75 3.5 11.75L20.33 11.75C20.74 11.75 21.08 12.09 21.08 12.5C21.08 12.91 20.74 13.25 20.33 13.25Z"
                    fill="#6C52E3"
                  />
                </svg>
              </div>
            </div>
            <div
              className="each-event cursor-pointer w-full flex justify-between items-center bg-white py-6 px-4 tablet:px-[30px] rounded"
              style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className=" flex flex-col gap-4">
                <div className="date text-[#313131] text-sm font-normal">
                  June 1, 2023 • 9 min read
                </div>
                <div className="heading text-[#1c2436] text-lg font-semibold">
                  CX Trends 2023: Lead the way with immersive CX
                </div>
                <div className="content text-[#5b616e] text-base font-normal ">
                  Join us in this exclusive event of BlinkCX and Zendesk.
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M14.4298 19.3201C14.2398 19.3201 14.0498 19.2501 13.8998 19.1001C13.7603 18.959 13.6821 18.7685 13.6821 18.5701C13.6821 18.3717 13.7603 18.1813 13.8998 18.0401L19.4398 12.5001L13.8998 6.96012C13.7603 6.81898 13.6821 6.62855 13.6821 6.43012C13.6821 6.23169 13.7603 6.04125 13.8998 5.90012C14.1898 5.61012 14.6698 5.61012 14.9598 5.90012L21.0298 11.9701C21.3198 12.2601 21.3198 12.7401 21.0298 13.0301L14.9598 19.1001C14.8098 19.2501 14.6198 19.3201 14.4298 19.3201Z"
                    fill="#6C52E3"
                  />
                  <path
                    d="M20.33 13.25H3.5C3.09 13.25 2.75 12.91 2.75 12.5C2.75 12.09 3.09 11.75 3.5 11.75L20.33 11.75C20.74 11.75 21.08 12.09 21.08 12.5C21.08 12.91 20.74 13.25 20.33 13.25Z"
                    fill="#6C52E3"
                  />
                </svg>
              </div>
            </div>
            <div
              className="each-event cursor-pointer w-full flex justify-between items-center bg-white py-6 px-4 tablet:px-[30px] rounded"
              style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className=" flex flex-col gap-4">
                <div className="date text-[#313131] text-sm font-normal">
                  September 22, 2023 • 5 min read
                </div>
                <div className="heading text-[#1c2436] text-lg font-semibold">
                  The CX Era: Empowering your business through world-class
                  customer experience
                </div>
                <div className="content text-[#5b616e] text-base font-normal ">
                  Join us in this exclusive event of BlinkCX and Zendesk.{" "}
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M14.4298 19.3201C14.2398 19.3201 14.0498 19.2501 13.8998 19.1001C13.7603 18.959 13.6821 18.7685 13.6821 18.5701C13.6821 18.3717 13.7603 18.1813 13.8998 18.0401L19.4398 12.5001L13.8998 6.96012C13.7603 6.81898 13.6821 6.62855 13.6821 6.43012C13.6821 6.23169 13.7603 6.04125 13.8998 5.90012C14.1898 5.61012 14.6698 5.61012 14.9598 5.90012L21.0298 11.9701C21.3198 12.2601 21.3198 12.7401 21.0298 13.0301L14.9598 19.1001C14.8098 19.2501 14.6198 19.3201 14.4298 19.3201Z"
                    fill="#6C52E3"
                  />
                  <path
                    d="M20.33 13.25H3.5C3.09 13.25 2.75 12.91 2.75 12.5C2.75 12.09 3.09 11.75 3.5 11.75L20.33 11.75C20.74 11.75 21.08 12.09 21.08 12.5C21.08 12.91 20.74 13.25 20.33 13.25Z"
                    fill="#6C52E3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
