import { ourofficebg } from "../constants/utils";

const OurOffices = () => {
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center p-[70px]">
      <div className="w-full relative">
        <img className="bg-no-repeat bg-center bg-cover" src={ourofficebg} />
        <div className="singapore cursor-pointer absolute flex justify-center items-center left-[480px] bottom-[40px] w-8 bg-[#BDAAEC] h-8 rounded-[50%]">
          <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
        </div>
        <div className="filipino cursor-pointer absolute top-[240px] right-[390px] flex justify-center items-center w-8 bg-[#BDAAEC] h-8 rounded-[50%]">
          <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
        </div>
        <div className="singapore-address rounded-md  flex flex-col absolute left-[225px] bottom-[110px]  max-w-[339px] py-6 px-4 justify-center items-start">
                <div className="text-xl font-semibold bg-[#F7F5FF] p-4 pb-0">Singapore</div>
                <div className="text-base font-normal bg-[#F7F5FF] p-4 ">10 Anson Road #22-02 International Plaza Singapore (079903)</div>
            </div>
      <div className="filipino-address rounded-md flex flex-col absolute top-[30px] right-[20px] max-w-[339px] py-6 px-4 justify-center items-start">
                <div className="text-xl font-semibold p-4 bg-[#F7F5FF] pb-0">Philippines</div>
                <div className="text-base font-normal p-4 bg-[#F7F5FF]">19th Floor, Marco Polo Ortigas Manila, Sapphire Road, Ortigas Centre, Pasig City Manila, 1600, Philippines</div>
            </div>
      </div>
    </div>
  );
};

export default OurOffices;
