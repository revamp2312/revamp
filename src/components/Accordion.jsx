import { accodionarrow } from "../constants/utils";

const Accordion = ({ heading, content, showAc, setAcc, hideAcc }) => {
  return (
    <div
      onClick={showAc ? hideAcc : setAcc}
      className="bg-white rounded p-6 cursor-pointer"
      style={
        showAc
          ? {
              borderRadius: " 0px 0px 4px 4px",
              borderTop: "2px solid  #693ED4",
            }
          : {}
      }
    >
      <div className="flex flex-col ">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">{heading}</p>
          </div>
          <div
            className="transition-transform duration-200"
            style={
              showAc
                ? {
                    transform: "rotate(180deg)",
                  }
                : {
                    transform: "rotate(0deg)",
                  }
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.9652 9.51721L11.9997 14.4827L7.03418 9.51721"
                stroke="#693ED4"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          className="grid transition-[grid-template-rows]  duration-[400ms]"
          style={
            showAc
              ? {
                  gridTemplateRows: "1fr",
                }
              : {
                  gridTemplateRows: "0fr",
                }
          }
        >
          <div className="overflow-hidden">
            <div>
              <p className="font-normal pt-4">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
