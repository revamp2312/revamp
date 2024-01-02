import React from "react";
import { aboutusHero } from "../../constants/utils";

const AboutUsHero = () => {
  return (
    <div className="hero-container flex justify-center items-center m-auto max-w-[1440px] w-[100%]">
      <div className="hero-wrapper w-[100%] flex flex-col gap-6 justify-center laptop:flex-row laptop:gap-0 ">
        <div className="left-wrapper w-full laptop:w-[50%] flex flex-col gap-16 justify-start items-start px-6  pt-12 tablet:py-[80px] laptop:pr-0 laptop:pl-[70px] ">
          <div className="heading flex flex-col gap-6">
            <div className="flec flex-col gap-2">
              <p className="text-[#666]">ABOUT US</p>

              <div className="title  flex">
                <h1 className="leading-[30px]font-normal tablet:font-semibold tablet:leading-[72px] text-[#333333]">
                  Achieving Customer Excellence Together,
                  <br className="hidden tablet:block" />
                  <span
                    className="bg-clip-text"
                    style={{
                      background:
                        "linear-gradient(118deg, #693ED4 26.04%, #A31EBE 76.57%)",
                      WebkitTextFillColor: "transparent",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Captured in a blink
                  </span>
                </h1>
              </div>
            </div>

            <p className="max-w-[594px]">
              Blink CX's approach to customer excellence is a journey we embark
              on together, one Blink at a time.
            </p>
          </div>
        </div>
        <div className="right-wrapper  w-full laptop:w-[50%] max-h-[600px] flex justify-center items-center">
          <img
            className=" max-w-[664px] w-[100%] h-[100%] object-contain"
            src={aboutusHero}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
