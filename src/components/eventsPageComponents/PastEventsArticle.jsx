import { useNavigate, useParams } from "react-router-dom";
import { pastevents } from "../../constants/pastevents";

const PastEventsArticle = () => {
  const { articleId } = useParams();
  console.log(articleId);
  const navigate = useNavigate();

  const handleGoBackToEvents = () => {
    navigate(-1);
  };

  const article = pastevents.filter((each) => each?.id == articleId);

  return (
    <div className="w-full max-w-[1440px] flex justify-center items-center m-auto pt-[35px] px-[70px]">
      <div className="flex flex-col  items-center justify-center gap-6 w-full">
        <div className="flex justify-start items-center w-full text-sm font-normal cursor-pointer">
          <div onClick={handleGoBackToEvents} className="text-[#333]">
            Events and Updates
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_2531_9652)">
                <path
                  d="M7.1582 14.325L10.9749 10.5L7.1582 6.675L8.3332 5.5L13.3332 10.5L8.3332 15.5L7.1582 14.325Z"
                  fill="#333333"
                />
              </g>
              <defs>
                <clipPath id="clip0_2531_9652">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(0 -1 1 0 0 20.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div onClick={handleGoBackToEvents} className="text-[#333]">
            Past Events
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_2531_9652)">
                <path
                  d="M7.1582 14.325L10.9749 10.5L7.1582 6.675L8.3332 5.5L13.3332 10.5L8.3332 15.5L7.1582 14.325Z"
                  fill="#333333"
                />
              </g>
              <defs>
                <clipPath id="clip0_2531_9652">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(0 -1 1 0 0 20.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-[#693ED4]">{article[0].title}</div>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center max-w-[640px]">
          <div>
            <h2> {article[0].title}</h2>
          </div>
          <div>
            <img src={article[0].imgSrc} alt="" />
          </div>
          <div className="flex flex-col gap-4">
          {article[0].description.map((eachpara,index)=>{
            return <p key={index}>{eachpara.para}</p>

          })}
         
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEventsArticle;
