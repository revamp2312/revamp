import { useState } from "react";
import { UseplanContext } from "../../constants/useContext.jsx";
import { PartnerWithUsOnHover } from "../../constants/utils";

const PartnerWithUs = () => {
  const { setShowPop } = UseplanContext();
  const [onHover, setOnHover] = useState(false);

  const setmouseup = () => {
    setOnHover(true);
  };
  const setmousedown = () => {
    setOnHover(false);
  };
  return (
    <div
      onClick={() => {
        setShowPop(true);
      }}
      onMouseOver={setmouseup}
      onMouseLeave={setmousedown}
      className="cursor-pointer max-w-[360px] flex justify-center items-center "
     
    >
     {onHover?<img src={PartnerWithUsOnHover}/>:<img src={PartnerWithUsOnHover} />}
    </div>
  );
};

export default PartnerWithUs;
