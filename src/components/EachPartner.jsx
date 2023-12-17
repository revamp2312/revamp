import { partnerdata } from "../constants/partnerdata";
import { cxright, tiltedArrow } from "../constants/utils";

const EachPartner = () => {
  return (
    <div className="flex flex-col gap-16 justify-center items-center px-6  laptop:px-[70px] py-20 w-full max-w-[1440px] m-auto">
    <div className="flex flex-col laptop:flex-row justify-center items-center">
      <div className="w-full  laptop:w-5/12"><h1 className="text-[#333333]">Our Partnership Ecosystem</h1></div>
      <div className="w-full laptop:w-7/12 text-justify"><p>Our partnership ecosystem is a dynamic blend of industry experts coming together to supercharge the customer experience (CX). These partnerships are the backbone of our innovative approach, making it a top-tier solution provider for our clients. By teaming up with these industry leaders, we equip our clients with a full suite of tools and expertise to enhance their customer experiences. Together with our partners, we amplify the capabilities of our clients, resulting in transformative and customer-centric outcomes.</p></div>
    </div>
    <h2 className="w-full text-left">Our Partnerships</h2>
      <div className="flex flex-col gap-12 ">
        {partnerdata.map((partner, index) => {
          const {
            logo,
            name,
            rowReverse,
            btnText,
            deliver,
            seconBtn,
            secondBtnText,
            freeTrailtext,
            bookademobtn
          } = partner;

          return (
            <div
              key={index}
              className="flex    gap-5 "
              style={
                rowReverse
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }
              }
            >
              <div className="w-5/12 max-w-[530px] ">
                <img className="w-full" src={logo} />
              </div>
              <div className="w-7/12 flex flex-col gap-12 py-6  px-12 rounded-lg bg-[#F7F5FF] justify-center">
                <div className="flex flex-col gap-2">
                  <div className="text-[31px] font-semibold text-[#333333]">{name}</div>
                  <div>
                    <p className="text-sm tablet:text-lg"> {deliver}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col laptop:flex-row gap-2 justify-center items-center laptop:justify-start">
                 {bookademobtn?  <button
                      className="py-4 px-6 text-white text-[16px] w-full tablet:w-max font-bold rounded-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #693ED4 0%, #A31EBE 100%)",
                      }}
                    >
                      {btnText}
                    </button>:<button
                      className="py-4 px-6 text-white text-[16px] font-bold rounded-lg  tablet:min-w-[366px]"
                      style={{
                        background:
                          "linear-gradient(135deg, #693ED4 0%, #A31EBE 100%)",
                      }}
                    >
                      {btnText}
                    </button>}
                    {seconBtn && (
                        <div className="flex">
                        <button className="py-4 pl-6 text-[16px] font-bold text-[#333333]">
                        {secondBtnText}
                      </button>
                      <img className="w-[32px] object-contain" src={tiltedArrow} />
                        </div>
                     
                    )}
                  </div>

                  {freeTrailtext && (
                    <div className="flex gap-4 flex-col justify-center tablet:justify-center items-center tablet:flex-row">
                      <div className="flex gap-2">
                        <img src={cxright} />
                        <p className="text-[12px] font-normal leading-5">
                          No credit card required
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <img src={cxright} />
                        <p className="text-[12px] font-normal leading-5">
                          Full access to all features
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EachPartner;
