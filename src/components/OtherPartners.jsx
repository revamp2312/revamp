import {  aircallPartner, alidaPartner, cloudtalkPartner, edupuzzlePartner, slidoPartner } from "../constants/utils"


const OtherPartners = () => {
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center px-[70px] py-20">
      <div className="flex flex-col gap-12 justify-center items-center">
        <div className="text-[20px] text-[#333333] font-normal leading-8 ">OTHER PARTNERS OF BLINK</div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <div className="max-w-[288px]">
              <img className="w-full" src={cloudtalkPartner} />
            </div>
            <div className="max-w-[288px]">
              <img className="w-full"  src={aircallPartner} />
            </div>
            <div className="max-w-[288px]">
              <img className="w-full"  src={edupuzzlePartner} />
            </div>
          </div>
          <div className="flex justify-center">
          <div className="max-w-[288px]">
              <img className="w-full"  src={alidaPartner} />
            </div>
            <div className="max-w-[288px] ">
              <img className="w-full"  src={slidoPartner} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherPartners