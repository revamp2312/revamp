import { Link } from "react-router-dom";
import ExploreCard from "./ExploreCard";
import "./css/explorecardcontainer.css";
import { exploredata } from "../constants/exploredata";

const ExploreCardContainer = () => {
  return (
    <div className="explore-container">
      <div className="explore-wrapper">
        <div className="top">
          <div className="heading">
            <p className="text-[#666666]">EXPLORE OUR SERVICES</p>
          </div>
          <div className="title">
            <h2>
              Discover how we can help you achieve a ‘Customer-First’ approach
            </h2>
          </div>
        </div>

        <div className="explore-card-container">
          {exploredata.map((card) => {
            return <ExploreCard key={card.id} title={card.title} content={card.content} number={card.number} icon={card.icon} backgroundC={card.backgroundC} boxSHADOW={card.boxSHADOW} arrow={card.arrow} whatwedeiver={card.whatwedeiver} right={card.right}/>;
          })}
        </div>

        <div className="service-btn">
          <Link to="/services">
            <button>Explore our services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCardContainer;
