import { useRef } from "react";
import { UseplanContext } from "../../constants/useContext";
import { useDispatch, useSelector } from "react-redux";
import { addCompany, addEmail, addName } from "../../constants/slices/partnerFormSlice";

const PartnerWithUsPopout = () => {
  const { showPop, setShowPop } = UseplanContext();
  const name = useRef();
  const company = useRef();
  const email = useRef();
  const dispatch = useDispatch();

  const userData = useSelector((store) => store.partnerWithUs);

  const sendDatatoSHeet = () => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw3SJ0pnPcr7sF_G4OPM5hzjGlDD1QSVfueHok_Zv3P8HrxRiVIUhbIGdqhj_slHwbq/exec";
      const form = document.querySelector("#form");

      const  newform =new FormData()

      newform.append( "email", userData.emailId)
    fetch(scriptURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:newform,
    }).then((response) => {

    });
  };
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-[10000] max-w-[1440px] w-full flex justify-center items-center m-auto "
      style={
        showPop
          ? { visibility: "visible", background: "rgba(0,0,0,0.55)" }
          : { visibility: "hidden" }
      }
    >
      <div
        className="max-w-[450px] flex flex-col gap-6 px-4 py-8 tablet:p-8 rounded-2xl bg-white mx-6"
        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.3)" }}
      >
        <div className="flex justify-between">
          <h3 className="font-bold">Partner with us</h3>
          <div
            onClick={() => {
              setShowPop(false);
            }}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M15.7715 8.22864L7.54297 16.4572" stroke="#58585A" />
              <path d="M7.54297 8.22864L15.7715 16.4572" stroke="#58585A" />
            </svg>
          </div>
        </div>
        <form id="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addName(name.current.value));
            dispatch(addCompany(company.current.value));
            dispatch(addEmail(email.current.value));
            sendDatatoSHeet();
          }}
          action=""
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Name</label>
              <input
                name="name"
                ref={name}
                type="text"
                placeholder="Your first name"
                className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Company</label>
              <input
                name="company"
                ref={company}
                type="text"
                placeholder="Company name"
                className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email Address*</label>
              <input
                name="email"
                ref={email}
                type="email"
                placeholder="you@company.com"
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
  );
};

export default PartnerWithUsPopout;
