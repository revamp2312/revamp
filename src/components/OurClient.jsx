import {pldt,client} from "../constants/utils"
import "./css/ourclient.css"

const OurClient = () => {
  return (
    <div className="ourclient-container w-full max-w-[1440px] m-auto flex justify-center py-20 px-6 laptop:px-0">
      <div className="ourclient-wrapper max-w-[1048px] flex flex-col justify-center items-center gap-14">
        <div className="top flex flex-col justify-center items-center gap-2 max-w-[700px]">
          <div className="heading">
            <p className="text-[#666666]">OUR CLIENTS</p>
          </div>
          <div className="title">
            <h2>Let’s see what our clients say</h2>
          </div>
        </div>
        <div 
        style={{boxShadow:"0px 2px 20px 0px rgba(26, 26, 26, 0.1)"}}
        className="bottom flex flex-col-reverse laptop:flex-row rounded-lg p-4 bg-[#f7f5ff]">
          <div className="left w-full laptop:w-[75%]  ">
            <div className="client-information flex flex-col-reverse laptop:flex-col gap-12 py-8 px-6 bg-[#fff]">
            <div className="client-content flex flex-col gap-6">
              <div className="heading font-bold text-[#333333]"><h3>Excellent quality of service</h3></div>
              <div className="content text-base font-normal text-[#313131]">
                What we like about our engagement with Blink is their
                flexibility. Blink’s team understood our requirements and
                adjusted the program to better suit our business needs. They
                were also very collaborative and transparent about where we are,
                how well we were progressing and the next critical steps we had
                to take to achieve our goals. Overall, the project went
                smoothly, completed within the expected timeline and led to
                tangible results.
              </div>
            </div>
            <div className="client-detail flex  gap-4">
                <div className="hidden laptop:block client-icon w-[50px]">
                    <img src={client} alt="" />
                </div>
                <div className="data flex flex-col gap-1">
                    <div className="name text-sm font-semibold text-[#333]">Nescel Paul N. Palileo</div>
                    <div className="position text-[#333] text-sm font-normal">CX and Service Desk Head for PLDT Global</div>
                </div>
            </div>
            </div>
           
          </div>
          <div className="right flex w-full laptop:w-1/4 justify-start laptop:justify-center items-center opacity-100 bg-[#fff]">
            <div className="client-company-img scale-100 transition-all duration-200 hover:scale-110">
                <img src={pldt}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
