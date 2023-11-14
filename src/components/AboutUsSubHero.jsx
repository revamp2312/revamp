import { aboutSubHero } from "../constants/utils";

const AboutUsSubHero = () => {
  return (
    <div className="w-full max-w-[1440px] flex justify-center items-center px-[70px] py-12">
      <div className="flex gap-20 w-full">
        <div className="w-6/12">
          <img src={aboutSubHero} />
        </div>

        <div className="w-6/12 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <div>
              <h2>Our Mission</h2>
            </div>
            <div>
                <p>At BlinkCX we are here to help your company succeed with data-driven and actionable insights on how to improve your customer experience.</p>
            </div>
            <div>
                <p>
                We specialize in helping organizations achieve a ‘customer first’ agenda to drive desired financial and operational outcomes.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSubHero;
