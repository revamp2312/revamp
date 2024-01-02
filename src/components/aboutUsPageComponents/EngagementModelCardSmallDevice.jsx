const EngagementModelCardSmallDevice = ({
  title,
  description,
  bgcolor,
  imgsrc,
  isFisrst,
}) => {
  return (
    <div className="flex relative">
         <div className="absolute -left-28 top-[93px] rotate-90 w-[232px]  h-[48px] z-10"
          style={{ background: bgcolor }}>
          <div
            className="absolute z-[-1] bottom-0  right-[-24px] w-0 h-0 border-l-[24px] border-l-white   border-solid border-t-[24px] border-t-transparent  border-b-[25px] border-b-transparent "
            style={{ borderLeftColor: bgcolor }}
          ></div>
          </div>
    <div className="w-[223px] h-[270px] flex flex-col gap-2  bg-white p-4 relative z-20">
      <div className=" w-12 border-4 border-[#693ED4]  rounded-[50%] p-2  transition-all duration-500 ">
        <img className="w-[24px] " src={imgsrc} />
      </div>
      <div><p className="font-semibold">{title}</p></div>
      <div className=" text-sm font-normal">{description}</div>
    </div>
    </div>
 
  );
};

export default EngagementModelCardSmallDevice;
