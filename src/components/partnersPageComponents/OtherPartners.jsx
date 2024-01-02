import {
  aircallPartner,
  alidaPartner,
  cloudtalkPartner,
  edupuzzlePartner,
  slidoPartner,
} from "../../constants/utils";

const OtherPartners = () => {
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center px-6 tablet:px-[70px] py-20">
      <div className="flex flex-col gap-6 laptop:gap-12 justify-center items-center">
        <div className="text-[20px] text-[#333333] font-normal leading-8 text-center ">
          OTHER PARTNERS OF BLINK
        </div>
        <div className="hidden  laptop:grid grid-cols-2 tablet:grid-cols-3 place-items-center mx-auto gap-6">
          <div className="min-w-[100px] max-w-[288px]">
            <img className="w-full" src={cloudtalkPartner} />
          </div>
          <div className="min-w-[100px] max-w-[288px]">
            <img className="w-full" src={aircallPartner} />
          </div>
          <div className="min-w-[100px] max-w-[288px]">
            <img className="w-full" src={edupuzzlePartner} />
          </div>
        </div>
        <div className="hidden laptop:grid grid-cols-2 content-center">
          <div className="min-w-[100px] max-w-[288px]">
            <img className="w-full" src={alidaPartner} />
          </div>
          <div className="min-w-[100px] max-w-[288px] ">
            <img className="w-full" src={slidoPartner} />
          </div>
        </div>

        <div className="flex flex-wrap max-w-[1200 px] justify-center items-center mx-auto gap-4 laptop:hidden">
          <div className="min-w-[100px] max-w-[150px] tablet:max-w-[240px]">
            <img className="w-full" src={cloudtalkPartner} />
          </div>
          <div className="min-w-[100px] max-w-[150px] tablet:max-w-[240px]">
            <img className="w-full" src={aircallPartner} />
          </div>
          <div className="min-w-[100px] max-w-[150px] tablet:max-w-[240px]">
            <img className="w-full" src={edupuzzlePartner} />
          </div>
          <div className="min-w-[100px] max-w-[150px] tablet:max-w-[240px]">
            <img className="w-full" src={alidaPartner} />
          </div>
          <div className="min-w-[100px] max-w-[150px] tablet:max-w-[240px] ">
            <img className="w-full" src={slidoPartner} />
          </div>
         
        </div>
       
      </div>
    </div>
  );
};

export default OtherPartners;
