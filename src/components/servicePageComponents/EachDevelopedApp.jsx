import { DevelopedAppVideo1 } from "../../constants/utils"

const EachDevelopedApp = (props) => {
const {tag,heading,content,videoSrc,direction} = props
  return (
    <div className="w-full max-w-[1440px] flex justify-center items-center">
        <div style={direction?{flexDirection:"flex-row"}:{flexDirection:"row-reverse"}} className="eachDevelopedAppContainer flex  gap-6  laptop:flex-row justify-center laptop:gap-24 items-center w-full">
            <div className="w-full laptop:w-1/2 flex flex-col gap-10 justify-center items-center laptop:items-start laptop:justify-start">
                <div className="bg-[#6C52E3] px-3 py-2 text-white rounded text-sm max-w-[364px]" >* {tag}​</div>
                <div  className="flex flex-col gap-5 text-center laptop:text-left">
                    <div><h3>{heading}</h3></div>
                    <div><p>{content}</p></div>
                </div>
                <div>
                    <button 
                    className="px-6 py-4 rounded-lg text-white text-base font-bold"
                    style={{background:"linear-gradient(135deg, #693ED4 0%, #A31EBE 100%)"}}>Book a demo</button>
                </div>
            </div>
            <div className="w-full laptop:w-1/2 ">
            <img src={videoSrc}  alt="developedApp"/>
        </div>
        </div>
      
    </div>
  )
}

export default EachDevelopedApp