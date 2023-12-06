import "./css/startjourney.css";

const StartJourney = (props) => {
  const { title, description, imageUsed } = props;
  console.log(props);
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center py-20 px-[70px]   ">
      <div className="start-journey-wrapper w-full h-[446px] rounded-3xl flex">
        <div className="w-[60%] flex flex-col gap-12 p-[76px] ">
          <div className="flex flex-col gap-6 ">
            <div className="relative">
              <h2 className="text-white">{title}</h2>
              <div className="absolute bottom-[-12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="192"
                  height="16"
                  viewBox="0 0 192 16"
                  fill="none"
                >
                  <path
                    d="M2 14C50.0805 7.15593 160.828 -5.3589 190 7.71467"
                    stroke="#EAFF99"
                    strokeWidth="3.47708"
                    strokeLinecap="round"
                  />
                </svg>{" "}
              </div>
            </div>
            <div>
              <p className="text-white">{description}</p>
            </div>
          </div>
          <div>
            <div>
              <button className="py-4 px-5 rounded-lg bg-[#150c2a] text-[#f8fafc] text-center text-[16px] font-bold leading-6 tracking-[0.32px]  border-none ">
                Talk to CX Experts
              </button>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="h-full flex items-end">
            <img
              className="w-full h-[120%] object-contain"
              src={imageUsed}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
