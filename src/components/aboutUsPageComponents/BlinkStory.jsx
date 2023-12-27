import { Link } from "react-router-dom";

const BlinkStory = () => {
  return (
    <div id="blink" className="h-[630px] overflow-y-auto relative px-6 laptop:px-[70px] rounded-3xl m-auto max-w-[1440px] w-full">
      <div className=" h-[630px]">
        <div className=" h-[630px] pt-20 story-main flex justify-center items-start w-full max-w-[1440px] rounded-3xl">
          <div className="w-full  flex flex-col gap-12 justify-center items-center">
            <div>
              <h2>Our Journey in Transforming CX and Innovating Together</h2>
            </div>
            <Link to="/blinkstory">
              <br />
              <div>
                <button className=" py-4 px-6 border-[1px] font-bold border-black rounded-lg hover:bg-purple-600 hover:text-white hover:border-transparent">
                  Dive into Blink CX's Story
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlinkStory;
