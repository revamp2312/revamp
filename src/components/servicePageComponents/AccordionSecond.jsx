import { accodionarrow } from "../../constants/utils"

const AccordionSecond = ({heading,content,showAc,setAcc,hideAcc}) => {

  return (
    <div onClick={showAc?hideAcc:setAcc} className="bg-white rounded-b p-6 cursor-pointer"
    style={ showAc? { background:"#F7F5FF",borderTop: "2px solid  #693ED4",}: {  } }>   
    <div className="flex flex-col ">
    <div className="flex justify-between items-center">
      <div><p className="font-semibold self-stretch">{heading}</p></div>
      <div  className="transition-transform duration-200 w-6"
        style={ showAc ? {  transform:"rotate(180deg)" }  : {  transform:"rotate(0deg)"  } }>
        <img className="w-full" src="./AccordionArrrow.png" />
        </div>
      </div>
      <div
        className="grid transition-[grid-template-rows]  duration-[400ms]"
        style={ showAc ? { gridTemplateRows: "1fr",}: { gridTemplateRows: "0fr", }} >
        <div className="overflow-hidden">
          <ul>
          {content.map((each,index)=>{
            return <li style={{listStyle:"square"}}  key={index} className="font-normal pt-4 ">
                       {each.para}
                  </li>
          })}
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AccordionSecond