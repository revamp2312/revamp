import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./css/footer.css";

const Footer = () => {
  return (
    <div className="footer-container w-full max-w-[1440px] m-auto flex justify-center items-center px-6 tablet:px-14 laptop:px-[70px]">
      <div className="footer-wrappper w-full flex flex-col gap-12">
        <div className="upper pt-16 flex flex-col items-center laptop:flex-row gap-[100px]">
          <div className="company-info flex flex-col justify-center items-center laptop:items-start gap-2 max-w-[350px]">
            <div className="company-logo flex w-24">
              <Logo />
            </div>
            <div className="company-desc ">
              <p className="text-[#666] text-sm font-light text-center laptop:text-left">
                Blink is a customer experience company and we help business
                leaders to make data-driven decisions, convert those decisions
                into meaningful actions, and help them keep and win more brand
                advocates.
              </p>
            </div>
          </div>
          <div className="company-menus flex flex-col justify-center  gap-12 tablet:gap-0 tablet:flex-row w-full laptop:w-[60%] tablet:justify-between laptop:justify-around">
            <div className="each-menu flex flex-col gap-4">
              <div className="heading text-[#333] text-sm font-semibold">Company</div>
              <ul className="list-none flex flex-col gap-3">
              <Link to="/" ><li className="text-[#666] text-sm font-light">Home</li></Link>
            
                <Link to="/aboutus" ><li className="text-[#666] text-sm font-light">About us</li></Link>
                <Link to="/services"><li className="text-[#666] text-sm font-light">Services</li></Link>
                <Link to="/eventsandupdates" > <li className="text-[#666] text-sm font-light">Events & Updates</li></Link>
                <Link to="/careers"><li className="text-[#666] text-sm font-light">Careers</li></Link> 
              </ul>
            </div>
            <div className="each-menu  flex flex-col gap-4">
              <div className="heading text-[#333] text-sm font-semibold">Support</div>
              <ul className="list-none flex flex-col gap-3">
              <Link to="/contact"><li className="text-[#666] text-sm font-light">Contact us</li></Link>
                
                <li className="text-[#666] text-sm font-light">Help Center</li>
              </ul>
            </div>
            <div className="each-menu flex flex-col gap-4">
              <div className="heading text-[#333] text-sm font-semibold">Legal</div>
              <ul className="list-none flex flex-col gap-3">
                <li className="text-[#666] text-sm font-light">Privacy Policy</li>
                <li className="text-[#666] text-sm font-light">Terms & Conditions</li>
                <li className="text-[#666] text-sm font-light">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lower flex flex-col-reverse gap-8 tablet:gap-0 tablet:flex-row  justify-between py-6 ">
          <div className="reserved-rights">
            <p className="text-sm font-normal text-[#666]">© 2023 Blink CX Co. All rights reserved.</p>
          </div>
          <div className="socials flex gap-6 cursor-pointer">
            <div className="eact-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M22.2234 0.078125H1.77187C0.792187 0.078125 0 0.851563 0 1.80781V22.3438C0 23.3 0.792187 24.0781 1.77187 24.0781H22.2234C23.2031 24.0781 24 23.3 24 22.3484V1.80781C24 0.851563 23.2031 0.078125 22.2234 0.078125ZM7.12031 20.5297H3.55781V9.07344H7.12031V20.5297ZM5.33906 7.5125C4.19531 7.5125 3.27188 6.58906 3.27188 5.45C3.27188 4.31094 4.19531 3.3875 5.33906 3.3875C6.47813 3.3875 7.40156 4.31094 7.40156 5.45C7.40156 6.58437 6.47813 7.5125 5.33906 7.5125ZM20.4516 20.5297H16.8937V14.9609C16.8937 13.6344 16.8703 11.9234 15.0422 11.9234C13.1906 11.9234 12.9094 13.3719 12.9094 14.8672V20.5297H9.35625V9.07344H12.7687V10.6391H12.8156C13.2891 9.73906 14.4516 8.7875 16.1813 8.7875C19.7859 8.7875 20.4516 11.1594 20.4516 14.2438V20.5297Z"
                  fill="#693ED4"
                />
              </svg>
            </div>
            <div className="eact-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_2490_2965)">
                  <path
                    d="M24 12.0781C24 5.4507 18.6274 0.078125 12 0.078125C5.37258 0.078125 0 5.4507 0 12.0781C0 18.0676 4.3882 23.0321 10.125 23.9323V15.5469H7.07812V12.0781H10.125V9.43438C10.125 6.42688 11.9166 4.76562 14.6576 4.76562C15.9701 4.76562 17.3438 5 17.3438 5V7.95312H15.8306C14.34 7.95312 13.875 8.8782 13.875 9.82812V12.0781H17.2031L16.6711 15.5469H13.875V23.9323C19.6118 23.0321 24 18.0676 24 12.0781Z"
                    fill="#693ED4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2490_2965">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.078125)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="eact-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M23 9.78811C23.0495 8.35676 22.7365 6.93613 22.09 5.65811C21.6514 5.13371 21.0427 4.77982 20.37 4.65811C17.5875 4.40563 14.7936 4.30215 12 4.34811C9.21667 4.30007 6.43274 4.40021 3.66003 4.64811C3.11185 4.74783 2.60454 5.00495 2.20003 5.38811C1.30003 6.21811 1.20003 7.63811 1.10003 8.83811C0.954939 10.9957 0.954939 13.1605 1.10003 15.3181C1.12896 15.9935 1.22952 16.6639 1.40003 17.3181C1.5206 17.8232 1.76455 18.2905 2.11003 18.6781C2.51729 19.0816 3.03641 19.3533 3.60003 19.4581C5.75594 19.7242 7.92824 19.8345 10.1 19.7881C13.6 19.8381 16.67 19.7881 20.3 19.5081C20.8775 19.4098 21.4112 19.1377 21.83 18.7281C22.11 18.448 22.3191 18.1052 22.44 17.7281C22.7977 16.6307 22.9733 15.4822 22.96 14.3281C23 13.7681 23 10.3881 23 9.78811ZM9.74003 14.9281V8.73811L15.66 11.8481C14 12.7681 11.81 13.8081 9.74003 14.9281Z"
                  fill="#693ED4"
                />
              </svg>
            </div>
            <div className="eact-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M24 5.38643C23.0972 5.78018 22.1424 6.04186 21.165 6.16343C22.195 5.55237 22.9651 4.58477 23.3295 3.44393C22.365 4.01593 21.3098 4.41874 20.2095 4.63493C19.5349 3.91459 18.6592 3.4138 17.6962 3.19762C16.7333 2.98143 15.7276 3.05984 14.8098 3.42266C13.892 3.78548 13.1045 4.41594 12.5496 5.23213C11.9948 6.04832 11.6982 7.01251 11.6985 7.99943C11.6985 8.38943 11.7315 8.76443 11.8125 9.12143C9.85512 9.02546 7.94004 8.51745 6.19245 7.6306C4.44487 6.74376 2.90414 5.49805 1.671 3.97493C1.03923 5.05771 0.843913 6.34059 1.12482 7.56233C1.40574 8.78407 2.14175 9.85281 3.183 10.5509C2.40414 10.53 1.64171 10.3222 0.96 9.94493V9.99893C0.961305 11.1351 1.354 12.2361 2.07198 13.1166C2.78995 13.9971 3.78937 14.6034 4.902 14.8334C4.48108 14.9444 4.04728 14.9988 3.612 14.9954C3.29938 15.001 2.98708 14.9728 2.6805 14.9114C2.99841 15.888 3.61124 16.7419 4.43459 17.3558C5.25795 17.9696 6.25134 18.3131 7.278 18.3389C5.53641 19.701 3.38846 20.4399 1.1775 20.4374C0.774 20.4374 0.387 20.4194 0 20.3699C2.24982 21.8197 4.87151 22.5867 7.548 22.5779C16.602 22.5779 21.552 15.0779 21.552 8.57693C21.552 8.35943 21.5445 8.14943 21.534 7.94093C22.5044 7.24641 23.3401 6.38075 24 5.38643Z"
                  fill="#693ED4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
