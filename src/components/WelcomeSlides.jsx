import { useState } from "react";

const WelcomeSlides = ({ imgSrc }) => {
  const [showNameandPosition, setShowNameandPosition] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setShowNameandPosition(true);
      }}
      onMouseLeave={() => {
        setShowNameandPosition(false);
      }}
      className="each-team-member w-[355px] relative"
    >
      <img className="each-team-member-img w-full" src={imgSrc} />

      <div
        style={
          showNameandPosition
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
        }
        className="tag transition-all duration-1000 h-[50px] absolute bottom-[10px] left-4 right-4 bg-white flex items-center"
      >
        <div className="name w-1/2">Name</div>
        <div className="position w-1/2">Position</div>
      </div>
    </div>
  );
};

export default WelcomeSlides;
