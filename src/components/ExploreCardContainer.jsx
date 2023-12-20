import { Link } from "react-router-dom";
import ExploreCard from "./ExploreCard";
import { exploredata } from "../constants/exploredata";

const ExploreCardContainer = () => {
  return (
    <div
     style={{background:"linear-gradient(180deg, #F7F5FF 0%, #FFF 28.16%)"}}
     className="explore-container w-full max-w-[1440px] m-auto flex justify-center items-center py-20">
      <div className="explore-wrapper flex flex-col items-center justify-center gap-12">
        <div className="top flex flex-col gap-4 justify-center items-center max-w-[860px] text-center   ">
          <div className="heading">
            <p className="text-[#666666] uppercase">Explore our Solutions</p>
          </div>
          <div className="title">
            <h2>
              Discover how we can help you achieve a ‘Customer-First’ approach
            </h2>
          </div>
        </div>

        <div className="explore-card-container flex flex-wrap justify-center items-start gap-12">
          {exploredata.map((card) => {
            return <ExploreCard key={card.id} title={card.title} content={card.content} number={card.number} icon={card.icon} backgroundC={card.backgroundC} boxSHADOW={card.boxSHADOW} arrow={card.arrow} whatwedeiver={card.whatwedeiver} right={card.right}/>;
          })}
        </div>

        <div className="service-btn">
          <Link to="/services">
            <button
            style={{background:"linear-gradient(135deg, #693ed4 0%, #a31ebe 100%)"}}
            className="cursor-pointer py-4 px-8 border-none rounded-lg text-[#fffdfa] text-base font-bold capitalize   "
            >Explore our Solutions</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCardContainer;
