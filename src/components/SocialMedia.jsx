import { yt1, yt2, yt3, yt4 } from "../constants/utils"


const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center max-w-[1440px] m-auto w-full px-[70px] py-20" style={{background:"linear-gradient(180deg, #F7F5FF 0%, #FFF 100%)"}}>
    <div className="flex flex-col gap-[42px]">
        <div className="flex flex-col gap-2 justify-center items-center">
            <div><h2>Join Our Social Media Community</h2></div>
            <div className="max-w-[535px] text-center "><p className="text-[#666] leading-7">Connect with us and discover inspiring videos and informative social media posts</p></div>
        </div>
        <div className="flex gap-5">
            <div>
                <img src={yt1} alt="yt-image" />
            </div>
            <div>
                <img src={yt2} alt="yt-image" />
            </div>
            <div>
                <img src={yt3} alt="yt-image" />
            </div>
            <div>
                <img src={yt4} alt="yt-image" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default SocialMedia