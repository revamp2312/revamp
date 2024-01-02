import { yt1, yt2 } from "../../constants/utils"
import WebinarCard from "./WebinarCard"

const WebinarContainer = () => {
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap">
    <WebinarCard imgSrc={yt1} />
    <WebinarCard  imgSrc={yt2}/>
    <WebinarCard  imgSrc={yt2}/>
    </div>
  )
}

export default WebinarContainer