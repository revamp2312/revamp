import Logo from "./Logo";
import {fb,linkedIn,Twitter,youtube} from "../constants/utils"
import "./css/footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrappper">
        <div className="upper">
          <div className="company-info">
        
            <div className="company-logo">
              <Logo />
            </div>
            <div className="company-desc">
              <p>
                Blink is a customer experience company and we help business
                leaders to make data-driven decisions, convert those decisions
                into meaningful actions, and help them keep and win more brand
                advocates.
              </p>
            </div>
          </div>
          <div className="company-menus">
            <div className="each-menu">
                <div className="heading">Company</div>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Events & Updates</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className="each-menu">
                <div className="heading">Support</div>
                <ul>
                    <li>Contact us</li>
                    <li>Help Center</li>
                </ul>
            </div>
            <div className="each-menu">
                <div className="heading">Legal</div>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
               
                </ul>
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="reserved-rights">
            <p>© 2023 Blink CX Co. All rights reserved.</p>
          </div>
          <div className="socials">
            <div className="eact-social">
                <img src={fb} />
            </div>
            <div className="eact-social">
                <img  src={linkedIn}/>
            </div>
            <div className="eact-social">
                <img src={Twitter} />
            </div>
            <div className="eact-social">
                <img  src={youtube}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
