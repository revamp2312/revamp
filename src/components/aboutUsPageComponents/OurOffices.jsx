import { ourofficebg } from "../../constants/utils";

const OurOffices = () => {
  return (
    <div className="w-full max-w-[1440px] m-auto flex flex-col justify-center items-center px-6 py-12 tablet:px-14 laptop:p-[70px] ">
      <div className="">
        <h2>Our Offices</h2>
      </div>
      <div className="our-office-container w-full relative flex flex-col justify-center items-center">
        <img className=" hidden laptop:block bg-no-repeat bg-center bg-cover" src={ourofficebg} />

        <div className="hidden singapore cursor-pointer absolute laptop:flex justify-center items-center left-[38%] bottom-[7%] w-8 bg-[#BDAAEC] h-8 rounded-[50%]">
          <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
        </div>
        <div className="hidden filipino cursor-pointer absolute top-[36%] right-[31%] laptop:flex justify-center items-center w-8 bg-[#BDAAEC] h-8 rounded-[50%]">
          <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
        </div>
        <div className="hidden singapore-address rounded-md  laptop:flex flex-col absolute left-[12%] bottom-[15%]  max-w-[339px] py-6 px-4 justify-center items-start text-[#333333]">
          <div className="text-xl font-semibold bg-[#F7F5FF] rounded-tr-lg rounded-tl-lg p-4 pb-0 text-[#333333]">
            Singapore
          </div>
          <div className="text-base font-normal bg-[#F7F5FF]  rounded-r-lg rounded-bl-lg p-4 text-[#333333]">
            10 Anson Road #22-02 International Plaza Singapore (079903)
          </div>
        </div>
        <div className="hidden filipino-address rounded-md laptop:flex flex-col absolute top-[1%] right-[1%] max-w-[339px] py-6 px-4 justify-center items-start text-[#333333]">
          <div className="text-xl font-semibold p-4 rounded-tr-lg rounded-tl-lg bg-[#F7F5FF] pb-0 text-[#333333]">
            Philippines
          </div>
          <div className="text-base font-normal p-4 rounded-r-lg rounded-bl-lg bg-[#F7F5FF] text-[#333333]">
            19th Floor, Marco Polo Ortigas Manila, Sapphire Road, Ortigas
            Centre, Pasig City Manila, 1600, Philippines
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center laptop:hidden">
        <div className="singapore-address rounded-md  flex flex-col   max-w-[339px] py-6 px-4 justify-center items-start text-[#333333]">
          <div className="text-xl font-semibold bg-[#F7F5FF] rounded-tr-lg rounded-tl-lg p-4 pb-0 text-[#333333]">
            Singapore
          </div>
          <div className="text-base font-normal bg-[#F7F5FF]  rounded-r-lg rounded-bl-lg p-4 text-[#333333]">
            10 Anson Road #22-02 International Plaza Singapore (079903)
          </div>
        </div>
        <div className="filipino-address rounded-md flex flex-col max-w-[339px] py-6 px-4 justify-center items-start text-[#333333]">
          <div className="text-xl font-semibold p-4 rounded-tr-lg rounded-tl-lg bg-[#F7F5FF] pb-0 text-[#333333]">
            Philippines
          </div>
          <div className="text-base font-normal p-4 rounded-r-lg rounded-bl-lg bg-[#F7F5FF] text-[#333333]">
            19th Floor, Marco Polo Ortigas Manila, Sapphire Road, Ortigas
            Centre, Pasig City Manila, 1600, Philippines
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffices;
