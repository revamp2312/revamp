import { useState } from "react";
import "./css/needhelp.css";
import {
  Bad,
  Great,
  Neutral,
  Poor,
  visithelp,
  Qualtrics,
  GeneralFeedback,
} from "../constants/utils";

const NeedHelp = () => {
  const [firstLayerOpen, setFirstLayerOpen] = useState(false);
  const [secondLayerOpen, setSecondLayerOpen] = useState(false);

  return (
    <>
      <div
        className="outer cursor-pointer rounded-t-[4px] rounded-r-[4px] "
        onClick={() => {
          setFirstLayerOpen(true);
        }}
        style={firstLayerOpen ? { display: "none" } : { display: "flex" }}
      >
        <div className="box flex gap-[10px]">
          <div className="rotate-[90deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.6405 12.3398V16.4998L13.4405 19.5198C13.5205 19.6398 13.4005 19.7798 13.2605 19.7598L11.6205 19.3198V20.6598C11.6205 21.0198 11.3005 21.3398 10.9405 21.3398H5.74055C5.38055 21.3398 5.06055 21.0198 5.06055 20.6598L5.06055 12.3398C5.06055 11.9798 5.38055 11.6598 5.74055 11.6598H10.9805C11.3605 11.6598 11.6405 11.9598 11.6405 12.3398Z"
                fill="#FFFDFA"
              />
              <path
                d="M16.5595 14.3603V8.94032L18.8995 5.00032C18.9995 4.84032 18.8395 4.66032 18.6795 4.68032L16.5595 5.26032V3.52032C16.5595 3.04032 16.1395 2.64032 15.6795 2.64032H8.89953C8.41953 2.64032 8.01953 3.06032 8.01953 3.52032L8.01953 14.3203C8.01953 14.8003 8.43953 15.2003 8.89953 15.2003H15.7195C16.1795 15.2603 16.5595 14.8403 16.5595 14.3603Z"
                fill="#FFFDFA"
              />
              <path
                d="M11.6191 8.93984C11.6191 8.55984 11.9391 8.27984 12.2791 8.27984C12.6191 8.27984 12.9391 8.59984 12.9391 8.93984C12.9391 9.31984 12.6191 9.59984 12.2791 9.59984C11.9391 9.59984 11.6191 9.31984 11.6191 8.93984ZM11.6191 6.21984C11.6191 5.83984 11.9391 5.55984 12.2791 5.55984C12.6191 5.55984 12.9391 5.87984 12.9391 6.21984C12.9391 6.59984 12.6191 6.87984 12.2791 6.87984C11.9391 6.87984 11.6191 6.59984 11.6191 6.21984ZM11.6191 11.6798C11.6191 11.2998 11.9391 11.0198 12.2791 11.0198C12.6191 11.0198 12.9391 11.3398 12.9391 11.6798C12.9391 12.0598 12.6191 12.3398 12.2791 12.3398C11.9391 12.3398 11.6191 12.0598 11.6191 11.6798Z"
                fill="#6C52E3"
              />
            </svg>
          </div>
          <h2>Need Help</h2>
        </div>
      </div>

      <div
        className="inner-layer1"
        style={
          firstLayerOpen
            ? {
                transition: "transform 0.5s ease 0s",
                transform: "translateX(0px)",
              }
            : {
                transition: "transform 0.5s ease 0s",
                transform: "translateX(100%)",
              }
        }
      >
        <div
          className="close-inner1"
          onClick={() => {
            setFirstLayerOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_421_3310)">
              <path
                d="M15.8332 5.34567L14.654 4.1665L9.99984 8.82067L5.34567 4.1665L4.1665 5.34567L8.82067 9.99984L4.1665 14.654L5.34567 15.8332L9.99984 11.179L14.654 15.8332L15.8332 14.654L11.179 9.99984L15.8332 5.34567Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_421_3310">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="inner-box-layer1">
          <div className="inside-box border-[1px] border-solid border-[#F1F5F9] hover:border-[#693ED4]">
            <div className="icon">
              <img src={visithelp} />
            </div>
            <div className="content">
              <div className="title">Visit Help Center</div>
              <div className="description">
                Need help to find answers to common questions? Get the support
                you need.
              </div>
            </div>
          </div>
          <div className="inside-box border-[1px] border-solid border-[#F1F5F9] hover:border-[#693ED4]">
            <div className="icon">
              <img src={Qualtrics} />
            </div>
            <div className="content">
              <div className="title">
                Take Your Qualtrics Maturity Assessment
              </div>
              <div className="description">
                Take this assessment today and discover personalized insights to
                enhance your business strategies.
              </div>
            </div>
          </div>
          <div
            className="inside-box border-[1px] border-solid border-[#F1F5F9] hover:border-[#693ED4]"
            onClick={() => {
              setFirstLayerOpen(false);
              setSecondLayerOpen(true);
            }}
          >
            <div className="icon">
              <img src={GeneralFeedback} />
            </div>
            <div className="content">
              <div className="title">General Feedback</div>
              <div className="description">
                Share your general feedback about our new website and help us
                enhance your online experience.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="inner-layer2"
        style={
          secondLayerOpen
            ? {
                transition: "transform 0.5s ease 0s",
                transform: "translateX(0px)",
              }
            : {
                transition: "transform 0.5s ease 0s",
                transform: "translateX(100%)",
              }
        }
      >
        <div className="inner-layer2-wrapper">
          <div
            className="close-inner2"
            onClick={() => {
              setSecondLayerOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_421_3310)">
                <path
                  d="M15.8332 5.34567L14.654 4.1665L9.99984 8.82067L5.34567 4.1665L4.1665 5.34567L8.82067 9.99984L4.1665 14.654L5.34567 15.8332L9.99984 11.179L14.654 15.8332L15.8332 14.654L11.179 9.99984L15.8332 5.34567Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_421_3310">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="inside-boxlayer2">
            <div className="top">
              <div className="feedback">
                <div className="heading">Generic Feedback</div>
                <div className="description">
                  Explore our new website and share your feedback.
                </div>
              </div>

              <div className="feedback-emoji">
                <div className="each-emoji-feedback">
                  <div className="img w-[48px]">
                    <img src={Great} />
                  </div>
                  <div className="title">Great</div>
                </div>
                <div className="each-emoji-feedback">
                  <div className="img w-[48px]">
                    <img src={Neutral} />
                  </div>
                  <div className="title">Neutral</div>
                </div>
                <div className="each-emoji-feedback">
                  <div className="img w-[48px]">
                    <img src={Poor} />
                  </div>
                  <div className="title">Poor</div>
                </div>
                <div className="each-emoji-feedback">
                  <div className="img w-[48px]">
                    <img src={Bad} />
                  </div>
                  <div className="title">Bad</div>
                </div>
              </div>

              <div className="comments">
                <div className="title">Comments (optional)</div>
                <textarea
                  className="text-area"
                  placeholder="Write what best describes your feedback"
                />
              </div>
            </div>
            <div className="bottom">
              <div className="feedback-btn">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeedHelp;
