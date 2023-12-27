import { ContactPageHero,} from "../../constants/utils";
import "../css/contacthero.css";


const ContactHeroSection = () => {

  return (
    <div className=" w-full max-w-[1440px] m-auto flex justify-center items-center  ">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col laptop:flex-row w-full contact-hero-container">
          <div className="w-full laptop:w-6/12 flex items-center flex-col gap-6 py-20 px-6 tablet:px-14 laptop:pl-[70px] laptop:pr-0 ">
            <div className="flex  flex-col gap-2">
              <div>
                <p className="text-[#666666]">CONTACT US</p>
              </div>
              <div>
                <h1 className="text-[#333333]">Get in Touch with Blink CX</h1>
              </div>
            </div>
            <div className="max-w-[640px]">
              <p>
                Get in touch for personalized support, service information, or
                any inquiries. We are excited to assist you on your CX journey.
              </p>
            </div>
          </div>
          <div className=" hidden tablet:block w-[70%]  m-auto  laptop:w-6/12 relative">
            <img src={ContactPageHero} />

            <div
           
              className="singapore cursor-pointer absolute flex justify-center items-center left-[37%] bottom-[32%] w-8 bg-[#BDAAEC] h-8 rounded-[50%]"
            >
              <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
            </div>
            <div className="singapore-name absolute left-[42%] bottom-[32%] ">
              <p className="text-[#693ED4] font-semibold leading-6">
                Singapore
              </p>
            </div>
           
            <div
           
              className="filipino cursor-pointer absolute top-[28%] right-[29%] flex justify-center items-center w-8 bg-[#BDAAEC] h-8 rounded-[50%]"
            >
              <div className="w-4 h-4 bg-[#693ED4] rounded-[50%]"></div>
            </div>
            <div className="filipino-name absolute top-[34%] right-[4%]">
              <p className="text-[#693ED4] font-semibold leading-6">
                Manila, Philippines
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
