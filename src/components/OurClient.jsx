import {pldt,client} from "../constants/utils"
import "./css/ourclient.css"

const OurClient = () => {
  return (
    <div className="ourclient-container">
      <div className="ourclient-wrapper">
        <div className="top">
          <div className="heading">
            <p className="text-[#666666]">OUR CLIENTS</p>
          </div>
          <div className="title">
            <h2>Let’s see what our clients say</h2>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="client-information">
            <div className="client-content">
              <div className="heading text-[#333333]">Excellent quality of service</div>
              <div className="content">
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
            <div className="client-detail">
                <div className="client-icon">
                    <img src={client} alt="" />
                </div>
                <div className="data">
                    <div className="name">Nescel Paul N. Palileo</div>
                    <div className="position">CX and Service Desk Head for PLDT Global</div>
                </div>
            </div>
            </div>
           
          </div>
          <div className="right">
            <div className="client-company-img">
                <img src={pldt}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
