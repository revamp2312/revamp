import "./css/herohome.css";
import HomeText from "./HomeText";
const HeroHome = (props) => {

  return (
    <div className="hero-container flex justify-center items-center m-auto max-w-[1440px] w-[100%]">
      <div className="hero-wrapper w-[100%] flex justify-center">
        <div className="left-wrapper w-[50%] flex flex-col gap-16 justify-start items-start py-[80px] pr-0 pl-[70px] ">
          <div className="heading flex flex-col gap-6">
            <div className="title">
              <h1 className="leading-[72px]">{props.title}</h1>
              <HomeText  textanimation={props.textanimation}/>
              {/* <div className="gradient">
                <ul>
                  <li><h1>CX Revolution</h1></li>
                  <li><h1>Data Intelligence</h1></li>
                  <li><h1>Employee Engagement</h1></li>

                </ul>
              </div> */}
            </div>

            <p className="max-w-[594px]">
            {props.suntitle}
            </p>
          </div>

         {props.isfirstbtn && <div className="cta-btns flex gap-6 items-center">
            <div className="first-btn  ">
              <button className="py-4 px-5 cursor-pointer rounded-lg text-[14px] font-bold leading-[20px] tracking-[-0.32px] border-none text-white ">
              {props.firstbtn}
              </button>
            </div>
          { props.twobtns && <div className="second-btn border-none text-[#333333] bg-transparent text-[16px] font-bold leading-5 tracking-[-0.32px]">
              <button>{props.secondbtn}</button>
            </div>}
          </div>}
        </div>
        <div className="right-wrapper w-[50%] max-h-[600px]">
          <img className= " max-w-[664px] w-[100%] h-[100%] object-contain" src={props.imgurl} />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
