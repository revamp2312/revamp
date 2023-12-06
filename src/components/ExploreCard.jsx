import { useState } from "react";
import "./css/explorecard.css";

const ExploreCard = (props) => {
  console.log(props);
  const {
    title,
    number,
    content,
    icon,
    backgroundC,
    boxSHADOW,
    arrow,
    whatwedeiver,
    right,
  } = props;
  const [showCard, setShowCard] = useState(false);

  // const style = [
  //   {
  //     topsideropen: {
  //       background: backgroundC,
  //       transform: "rotate(0deg)",
  //     },
  //   },

  //   {
  //     topsiderclose : {
  //   background: backgroundC,

  //   transform: "rotate(15.821deg)",
  // }
  //   },
  //   {
  //     cardopen :{
  //   borderTop: "2px solid" + backgroundC,
  //   paddingTop: "48px",
  // }
  //   },{
  //     cardclose : {
  //   borderTop: "none",
  //   paddingTop: "0px",
  // }
  //   }
  // ];
console.log(boxSHADOW);
  const topsideropen={
    background: backgroundC,
        transform: "rotate(0deg)",
  }
   const topsiderclose = {
    background: backgroundC,

    transform: "rotate(15.821deg)",
   }
       
   const cardopen ={
    borderTop: "2px solid" + backgroundC,
    paddingTop: "48px",
  }
  const cardclose ={
    borderTop: "none",
    paddingTop: "0px",
  }
    
  const wholecardclose={
    boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)"
  } 
const wholecardopen={
  boxShadow:boxSHADOW
}
  
  
 

  return (
    <div
      onMouseOver={() => {
        setShowCard(true);
      }}
      onMouseLeave={() => {
        setShowCard(false);
      }}
      style={showCard ? wholecardopen:wholecardclose}
      className="card-container"
    >
      <div className="card-wrapper">
        <div className="upper">
          <div className="icon-and-number">
            <div className="icon">
              <img src={icon} />
            </div>
            <div className="number">0{number}</div>
          </div>

          <div className="card-info">
            <div className="heading">{title}</div>
            <div className="content">
              <p>{content}</p>
            </div>
          </div>
        </div>

        <div
          className="card-open"
          style={
            showCard
              ? { gridTemplateRows: "1fr", paddingTop: "48px" }
              : { gridTemplateRows: "0fr", paddingTop: "48px" }
          }
        >
          <div>
            <div className="title" style={showCard ? cardopen : cardclose}>
              <p>What we deliver:</p>
            </div>
            <ul>
              {whatwedeiver.map((each, index) => {
                return (
                  <li key={index}>
                    <div className="righticon">
                      <img src={right} />
                    </div>
                    <p>{each.data}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className="lower"
          style={showCard ? { display: "none" } : { display: "block" }}
        >
          <img src={arrow} />
        </div>
      </div>
      <div
        className="topsider"
        style={showCard ? topsideropen : topsiderclose}
      ></div>
    </div>
  );
};

export default ExploreCard;
