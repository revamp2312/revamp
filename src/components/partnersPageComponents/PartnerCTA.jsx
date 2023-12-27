import "../css/startjourney.css";

const StartJourney = (props) => {
  const { title, description, imageUsed } = props;
  console.log(props);
  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center items-center py-20 px-6 laptop:px-[70px]   ">
      <div className="start-journey-wrapper w-full rounded-3xl flex flex-col laptop:flex-row">
        <div className="w-full laptop:w-[50%] flex  justify-center  items-center  px-6 py-12 laptop:p-[76px]  ">
          <div className="flex flex-col gap-6 ">
            <div className="relative">
              <h2 className="text-white">{title}</h2>
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
                </svg>{" "}
              </div>
            </div>
            <div>
              <p className="text-white">{description}</p>
            </div>
          </div>
       
        </div>
        <div className="w-full laptop:w-[50%] flex items-end p-6 tablet:p-12">
          <div className="h-[100%] bg-white p-8 rounded-2xl">
          <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action=""
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-6">
          <div className=" flex flex-col tablet:flex-row gap-6">
          <div className="flex flex-col gap-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Your first name"
                className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email Address*</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
              />
            </div>
          </div>
           
            <div className="flex flex-col gap-2">
              <label htmlFor="">Company</label>
              <input
                type="text"
                placeholder="Company name"
                className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
              />
            </div>
           
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[#666] text-xs ">
              By submitting this form, you confirm that you agree to the storing
              and processing of your personal data by Blink CX as described in
              the Privacy Policy.
            </div>
            <div className="w-full">
              <button
                className="w-full py-4 px-6 rounded-lg text-[white]"
                style={{
                  background:
                    " linear-gradient(135deg, #693ED4 0%, #A31EBE 100%)",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
