import "./css/startjourney.css";

const StartJourney = (props) => {
const {title,description,imageUsed}=props
  console.log(props);
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center py-20 px-[70px]   ">
      <div className="start-journey-wrapper w-full h-[450px] flex">
        <div className="w-[60%] flex flex-col gap-12 p-[100px] ">
          <div className="flex flex-col gap-6 ">
            <div>
              <h2 className="text-white">{title}</h2>
            </div>
            <div>
              <p className="text-white">
             {description}
              </p>
            </div>
          </div>
          <div>
            <div>
                <button className="py-4 px-5 rounded-lg bg-[#150c2a] text-[#f8fafc] text-center text-[16px] font-bold leading-6 tracking-[0.32px]  border-none ">Talk to CX Experts</button>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
            <div className="h-full">
                <img className="w-full h-full object-contain" src={imageUsed} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
