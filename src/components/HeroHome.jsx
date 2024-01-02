import "./css/herohome.css";
import HomeText from "./HomeText";
const HeroHome = (props) => {
  return (
    <div className="hero-container flex justify-center items-center m-auto max-w-[1440px] w-[100%]">
      <div className="hero-wrapper w-[100%] flex flex-col justify-center laptop:flex-row">
        <div className="left-wrapper w-full laptop:w-[55%] flex flex-col gap-6 tablet:gap-16 justify-start items-start py-12 laptop:py-[80px] px-4 tablet:px-14 laptop:pr-0 laptop:pl-[70px] ">
          <div className="heading flex flex-col gap-2 tablet:gap-6">
            <div className="flex flex-col gap-2">
              {props.isPageName && (
                <p className="text-[#666]">{props.pageName}</p>
              )}
              <div className="title inline-block  ">
                <h1 className=" text-[#333333] inline-block">{props.title} <span>   <HomeText textanimation={props.textanimation} /></span></h1>
             
                {/* <div className="gradient">
                <ul>
                  <li><h1>CX Revolution</h1></li>
                  <li><h1>Data Intelligence</h1></li>
                  <li><h1>Employee Engagement</h1></li>

                </ul>
              </div> */}
              </div>
            </div>

            <p className="max-w-[594px]">{props.suntitle}</p>
          </div>

          {props.isfirstbtn && (
            <div className="cta-btns flex flex-col gap-2 tablet:flex-row tablet:gap-6 items-center w-full ">
              <div className="first-btn w-full tablet:w-max">
                <button className="w-full py-4 px-5 cursor-pointer rounded-lg text-[14px] font-bold leading-[20px] tracking-[-0.32px] border-none text-white ">
                  {props.firstbtn}
                </button>
              </div>
              {props.twobtns && (
                <div className="w-full tablet:w-max second-btn border-[1px] border-solid border-[#693ED4] py-3 px-6 rounded-lg tablet:border-none text-[#333333] bg-transparent text-[16px] font-bold leading-5 tracking-[-0.32px]">
                  <button className="w-full">{props.secondbtn}</button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="right-wrapper  w-full laptop:w-[45%] max-h-[600px] flex justify-center items-center">
          <img
            className=" max-w-[664px] w-[100%] h-[100%] object-cover"
            src={props.imgurl}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
