import { useNavigate } from "react-router-dom";
import { pastArticle } from "../constants/utils";


const PastEventsArticle = () => {

    const navigate = useNavigate();
    const handleGoBackToEvents = () => {

    navigate(-1);
  };

  return (
    <div className="w-full max-w-[1440px] flex justify-center items-center m-auto pt-[35px] px-[70px]">
      <div className="flex flex-col  items-center justify-center gap-6 w-full">
        <div className="flex justify-start items-center w-full text-sm font-normal cursor-pointer">
          <div onClick={handleGoBackToEvents} className="text-[#333]">Events and Updates</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_2531_9652)">
                <path
                  d="M7.1582 14.325L10.9749 10.5L7.1582 6.675L8.3332 5.5L13.3332 10.5L8.3332 15.5L7.1582 14.325Z"
                  fill="#333333"
                />
              </g>
              <defs>
                <clipPath id="clip0_2531_9652">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(0 -1 1 0 0 20.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div onClick={handleGoBackToEvents}  className="text-[#333]">Past Events</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_2531_9652)">
                <path
                  d="M7.1582 14.325L10.9749 10.5L7.1582 6.675L8.3332 5.5L13.3332 10.5L8.3332 15.5L7.1582 14.325Z"
                  fill="#333333"
                />
              </g>
              <defs>
                <clipPath id="clip0_2531_9652">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(0 -1 1 0 0 20.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-[#693ED4]">
            Gen AI Uncovered: Advancing CX & EX in the Philippines
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center max-w-[640px]">
          <div>
            <h2>Gen AI Uncovered: Advancing CX & EX in the Philippines</h2>
          </div>
          <div>
            <img src={pastArticle} alt="" />
          </div>
          <div>
            <p>
              Join this exclusive event with Zendesk "Gen AI Uncovered:
              Advancing CX & EX in the Philippines" designed to explore the
              magic of CX & EX + Generative AI through the latest technology
              innovations released at "The Next Big AI Drop" in New York last
              month.
              <br />
              <br />
              In this session, you'll get the following key insights:
              <br />
              <br />
              - How integration of CX is essential to thrive in the
              experience-driven economy.
              <br />
              - Hear how Zendesk Generative AI is transforming customer service
              experiences
              <br />
              - Explore the role of agents and how the combination of technology
              + human touch can be the winning formula in 2024 and beyond.
              <br />
              <br />
              Happening on November 24, 2023 | Friday 10:00AM to 2:00PM Fairmont
              Makati 1, Raffles Drive, Makati Ave Makati City, Philippines.
              <br />
              <br />
              REGISTER HERE:https://lnkd.in/g6vnr5A2
              <br />
              <br />
              Network with your inspiring, like-minded community and gain
              invaluable insights from local CX leaders in the Philippines.
              <br />
              <br />
              Thank you and see you there!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEventsArticle;
