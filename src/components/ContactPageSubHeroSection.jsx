import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"


const ContactPageSubHeroSection = () => {
  return (
    <div className="flex justify-center gap-6 mt-[-70px] pb-20">
    <div
      className="max-w-[420px] px-6 py-8 bg-white rounded-2xl flex flex-col gap-12 z-10"
      style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div>
        <p className="font-semibold">
          Reach out for personalized support, service info, or any
          questions.
        </p>
      </div>
      <HashLink smooth to="#contactEnquiryForm">
      <div className="flex justify-center items-center bg-[#693ED4] py-4 px-6 cursor-pointer  rounded-lg">
        <button className="text-white font-semiboldbold text-[16px]">
          Submit an inquiry
        </button>
      </div>
      </HashLink>
    </div>
    <div
      className="max-w-[420px] px-6 py-8 bg-white rounded-2xl flex flex-col gap-12 z-10"
      style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div>
        <p className="font-semibold">
          Already a client? Let’s get you the help you need.
        </p>
      </div>
      <a target="blank" href="https://support.blink-digital.com/hc/en-us">
        <div className="flex justify-center items-center bg-black py-4 px-6 cursor-pointer rounded-lg">
          <button className="text-white font-semiboldbold text-[16px]">
            Go to help center
          </button>
        </div>
      </a>
    </div>
  </div>
  )
}

export default ContactPageSubHeroSection