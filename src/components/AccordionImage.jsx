import { cxAcc2, serviceAccordion, serviceAccordion2 } from "../constants/utils";

const AccordionImage = ({setImg}) => {
  return (
    <div className="max-w-[532px]">
    
     <img className="w-full" src={setImg} /> 

    </div>
  );
};

export default AccordionImage;
