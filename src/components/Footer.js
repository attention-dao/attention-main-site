import "../styles/footer.css";
import GHIcon from "../assets/links/github_icon.png";
import EmailIcon from "../assets/links/email_icon.png";

function Footer() {
    return (
      <div className="footer">
        Stay tuned
        <div className="footer-links">
          <a href="https://github.com/attention-dao/attention-main-site" target="_blank" rel="noreferrer">
            <img src={GHIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    );
  }
  
  export default Footer;
  