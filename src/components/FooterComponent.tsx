import { Link } from "react-router-dom";
import FooterComponentStyled from "./FooterComponentStyled";
import iconFacebook from '../assets/facebookIcon.svg';
import iconTwitter from '../assets/twitterIcon.svg'
import iconInstagram from '../assets/instagramIcon.svg'

const FooterComponent = () => {
  return (
    <FooterComponentStyled>
      <div>
        <nav>
          <Link to={"/"} style={{ margin: "0 5px" }}>
            About
          </Link>
          •
          <Link to={"/"} style={{ margin: "0 5px" }}>
            Contact
          </Link>
          •
          <Link to={"/"} style={{ margin: "0 5px" }}>
            Terms of Use
          </Link>
          •
          <Link to={"/"} style={{ margin: "0 5px" }}>
            Privacy Policy
          </Link>
        </nav>
        <small>&copy; Your Website 2024.All Right Reserved.</small>
      </div>
      <div>
        <nav>
            <ul>
                <li><a href="#"><img src={iconFacebook} alt="" className="icon"/></a></li>
                <li><a href="#"><img src={iconTwitter} alt="" className="icon"/></a></li>
                <li><a href="#"><img src={iconInstagram} alt="" className="icon"/></a></li>
            </ul>
        </nav>
      </div>
    </FooterComponentStyled>
  );
};

export default FooterComponent;
