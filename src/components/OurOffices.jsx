import { ourofficebg } from "../constants/utils";

const OurOffices = () => {
  return (
    <div className="w-full max-w-[1440px] m-auto flex flex-col justify-center items-center p-[70px] ">
      <div className="">
        <h2>Our Offices</h2>
      </div>
      <div className="w-full relative flex flex-col justify-center items-center">
        <img className="bg-no-repeat bg-center bg-cover" src={ourofficebg} />

        <div className="singapore cursor-pointer absolute flex justify-center items-center left-[500px] bottom-[50px] w-8 bg-[#BDAAEC] h-8 rounded-[50%]">
          <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
        </div>
        <div className="filipino cursor-pointer absolute top-[240px] right-[390px] flex justify-center items-center w-8 bg-[#BDAAEC] h-8 rounded-[50%]">
          <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
        </div>
        <div className="singapore-address rounded-md  flex flex-col absolute left-[225px] bottom-[110px]  max-w-[339px] py-6 px-4 justify-center items-start text-[#333333]">
          <div className="text-xl font-semibold bg-[#F7F5FF] rounded-tr-2xl rounded-tl-2xl p-4 pb-0 text-[#333333]">
            Singapore
          </div>
          <div className="text-base font-normal bg-[#F7F5FF]  rounded-r-2xl rounded-bl-2xl p-4 text-[#333333]">
            10 Anson Road #22-02 International Plaza Singapore (079903)
          </div>
        </div>
        <div className="filipino-address rounded-md flex flex-col absolute top-[30px] right-[20px] max-w-[339px] py-6 px-4 justify-center items-start text-[#333333]">
          <div className="text-xl font-semibold p-4 rounded-tr-2xl rounded-tl-2xl bg-[#F7F5FF] pb-0 text-[#333333]">
            Philippines
          </div>
          <div className="text-base font-normal p-4 rounded-r-2xl rounded-bl-2xl bg-[#F7F5FF] text-[#333333]">
            19th Floor, Marco Polo Ortigas Manila, Sapphire Road, Ortigas
            Centre, Pasig City Manila, 1600, Philippines
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffices;
