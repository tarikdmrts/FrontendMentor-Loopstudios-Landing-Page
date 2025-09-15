import "./footer.scss";
import loopStudiosLogo from "../../images/logo.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import instagramIcon from "../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider">
        <img
          src={loopStudiosLogo}
          alt="Loopstudios Logo"
          className="footer__logo"
        />
        <ul className="footer__list">
          <li className="footer__item">About</li>
          <li className="footer__item">Careers</li>
          <li className="footer__item">Events</li>
          <li className="footer__item">Products</li>
          <li className="footer__item">Support</li>
        </ul>
      </div>
      <div className="footer__bottom">
        <div className="footer__socials">
          <img
            src={facebookIcon}
            alt="Facebook Icon"
            className="footer__social-icon"
          />
          <img
            src={twitterIcon}
            alt="Twitter Icon"
            className="footer__social-icon"
          />
          <img
            src={pinterestIcon}
            alt="Pinterest Icon"
            className="footer__social-icon"
          />
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            className="footer__social-icon"
          />
        </div>
        <p className="footer__text">© 2025 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
}
