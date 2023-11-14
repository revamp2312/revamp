import { HeroHomeimg } from "../constants/utils";
import PartnerHeroSlider from "./PartnerHeroSlider";

const PartnerHeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full max-w-[1440px] m-auto px-[70px]">
      <div className="flex w-full">
        <div className="w-7/12 flex flex-col gap-6 py-24">
          <div className="flex flex-col gap-2">
            <div>
              <p>PARTNERS</p>
            </div>
            <div>
              <h1>
                Embark on Your CX Transformation Journey with
                <br />
                <span className="bg-clip-text"
                  style={{
                    background:
                      "linear-gradient(118deg, #693ED4 26.04%, #A31EBE 76.57%)",
                      WebkitTextFillColor:"transparent",
                      WebkitBackgroundClip:"text"
                  }}>
                  Our Trusted Partners
                </span>
              </h1>
            </div>
          </div>
          <div>
            <p>
              Explore how our partnerships drive customer-centric excellence.
            </p>
          </div>
        </div>
        <div className="w-5/12">
          <PartnerHeroSlider />
        </div>
      </div>
    </div>
  );
};

export default PartnerHeroSection;
