import { useState } from "react";
import "./css/needhelp.css";
import { Bad, Great, Neutral, Poor ,visithelp,Qualtrics,GeneralFeedback} from "../constants/utils";

const NeedHelp = () => {
  const [firstLayerOpen, setFirstLayerOpen] = useState(false);
  const [secondLayerOpen, setSecondLayerOpen] = useState(false);

  return (
    <>
      <div
        className="outer"
        onClick={() => {
          setFirstLayerOpen(true);
        }}
        style={firstLayerOpen ? { display: "none" } : { display: "flex" }}
      >
        <div className="box">
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
          X
        </div>
        <div className="inner-box-layer1">
          <div className="inside-box">
            <div className="icon"><img src={visithelp}/></div>
            <div className="content">
              <div className="title">Visit Help Center</div>
              <div className="description">
                Need help to find answers to common questions? Get the support
                you need.
              </div>
            </div>
          </div>
          <div className="inside-box">
            <div className="icon"><img src={Qualtrics}/></div>
            <div className="content">
              <div className="title">Qualtrics Maturity Assessment</div>
              <div className="description">
                Take this assessment today and discover personalized insights to
                enhance your business strategies.
              </div>
            </div>
          </div>
          <div className="inside-box" onClick={()=>{
            setFirstLayerOpen(false);
            setSecondLayerOpen(true)
          }}>
            <div className="icon"><img src={GeneralFeedback}/></div>
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

      <div className="inner-layer2" 
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
        }>
        <div className="inner-layer2-wrapper">

        <div
          className="close-inner2"
          onClick={() => {
            
            setSecondLayerOpen(false)
          }}
        >
          X
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
                  <div className="img w-[48px]" >
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
