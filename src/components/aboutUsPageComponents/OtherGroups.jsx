import { appcentricLogo, infocentricLogo } from "../../constants/utils";

const OtherGroups = () => {
  return (
    <div
      className="flex justify-center items-center m-auto max-w-[1440px] px-[70px] py-28"
      style={{ background: "linear-gradient(180deg, #F7F5FF 0%, #FFF 100%)" }}
    >
      <div className="flex h-full justify-around items-center gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h2>We are part of a bigger and more exciting group</h2>
          </div>
          <div>
            <p>
              Blink CX is part of the Centric Group of companies. Your true
              end-to-end partner in security and infrastructure consultancy,
              enterprise management, and customer experience.
            </p>
          </div>
        </div>

        <div className="relative max-w-[367px]   h-[320px] flex justify-center  items-center pt-16 pb-[30px] px-[30px] bg-white rounded-lg border-[1px] border-solid border-[#E9EAEC]">
          <div className="flex flex-col gap-12">
            <div>
              <p className="font-semibold">
                SAP's premier partner in the Philippines. Renowned for its
                precision and intelligence in delivering complex SAP solutions
                and mobile applications. 
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-[16px] font-semibold text-[#333333] hover:text-[#693ED4] cursor-pointer">
                Visit website
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.1665 10H15.8332"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4.16675L15.8333 10.0001L10 15.8334"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[-35px] h-[69px] flex justify-center items-center rounded-lg w-[285px] px-5 py-2 border-[1px] border-solid border-[#E9EAEC]"
            style={{
              background: "linear-gradient(93deg, #F50 0%, #FFBC00 102.03%)",
            }}
          >
            <div className="w-[180px]">
              <img className="w-full" src={appcentricLogo} />
            </div>
          </div>
        </div>

        <div className="info-card relative  max-w-[367px] h-[320px]  flex justify-center items-center py-14 px-[30px] bg-white rounded-lg border-[1px] border-solid border-[#E9EAEC]">
          <div className="flex flex-col gap-12">
            <div>
              <p className="font-semibold">
                The Identity Access Management Leader in the Philippines.
                Trusted by the top Enterprises in the country.
              </p>
            </div>
            <div className="flex gap-2 items-center">

            <div className="text-[16px] font-semibold text-[#333333] hover:text-[#693ED4] cursor-pointer">
              Visit website
            </div>
            <div>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.1665 10H15.8332"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4.16675L15.8333 10.0001L10 15.8334"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
            </div>
            </div>
          </div>
          <div
            className="absolute top-[-35px] h-[69px] flex justify-center items-center rounded-lg w-[285px] px-5 py-2 border-[1px] border-solid border-[#E9EAEC]"
            style={{
              background: "linear-gradient(93deg, #2854C5 0%, #4285F4 98.81%)",
            }}
          >
            <div className="w-[120px]">
              <img className="w-full" src={infocentricLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherGroups;
