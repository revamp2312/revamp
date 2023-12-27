import { eventspageCTAdata } from "../../constants/eventspageCTAdata";
import {eventarrow} from "../../constants/utils";

const EventsandupdatesCTA = () => {
  const style = {
    borderRadius: "24px",
    background: "linear-gradient(135deg, #693ED4 0%, #A31EBE 100%)",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
  };

  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center px-6 laptop:px-[70px] py-20">
      <div className="flex flex-col gap-12 laptop:flex-row laptop:gap-0 justify-center px-6 laptop:px-[70px] py-12 w-full "
        style={style}
      >
        <div className="flex flex-col justify-center  gap-6 w-full laptop:w-6/12">
          <div className="relative">
            <h2 className="text-white">Stay in the Loop – Follow Us</h2>
            <div className="absolute bottom-[-12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="16"
                viewBox="0 0 192 16"
                fill="none"
              >
                <path
                  d="M2 14C50.0805 7.15593 160.828 -5.3589 190 7.71467"
                  stroke="#EAFF99"
                  strokeWidth="3.47708"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-white text-center laptop:text-left">
              Join us and receive real-time updates, exclusive content, and a
              deeper connection with BlinkCX.
            </p>
          </div>
        </div>
        <div className="w-full laptop:w-6/12 flex justify-center laptop:justify-end">
          <div className="flex flex-col gap-5 w-full laptop:w-10/12">

          {eventspageCTAdata.map((each,index)=>{
            return  <div key={index} className="px-6 py-6 bg-white rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-6">
                  <img className="w-full" src={each.icon} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-base font-semibold">
                    {each.connectCTA}
                  </div>
                  <div>
                    <a target="blank" className="text-base font-normal text-[#693ED4]" href={each.connectLink}>
                      Blink Digital
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[10px]">
                <a target="blank" href={each.connectLink}>
                  <img className="w-full" alt="arrrow" src={eventarrow} />
                </a>
              </div>
            </div>
          })}
           
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsandupdatesCTA;
