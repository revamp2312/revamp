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
      className="each-team-member w-[355px]"
    >
      <img className="each-team-member-img w-full" src={imgSrc} />

      <div
        style={
          showNameandPosition
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
        }
        className="tag transition-all duration-1000"
      >
        <div className="name">Name</div>
        <div className="position">Position</div>
      </div>
    </div>
  );
};

export default WelcomeSlides;
