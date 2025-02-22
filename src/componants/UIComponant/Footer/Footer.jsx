import "../../../css/footer.css";
import SocialLinks from "./SocialLinks"; 

const SubContainer = ({ title, links }) => {
  return (
    <div className="subContainer">
      <div className="subHead">{title}</div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="/" aria-label={link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="pageNavContainer">
        <SubContainer
          title="Home"
          links={["Categories", "Devices", "Pricing", "FAQ"]}
        />
        <SubContainer
          title="Movies"
          links={["Genres", "Trending", "New Releases", "Popular"]}
        />
        <SubContainer
          title="Shows"
          links={["Genres", "Trending", "New Releases", "Popular"]}
        />
        <SubContainer title="Support" links={["Contact Us"]} />
        <SubContainer title="Subscription" links={["Plans", "Features"]} />
        <div className="subContainer">
          <div className="subHead">Connect With Us</div>
          <SocialLinks />
        </div>
      </div>
      <hr className="line" />
      <div className="copyrightContainer">
      <div className="copyright">@2025 StreamVibe, All Rights Reserved</div>
        <ul className="policyContainer">
          <li>
            <a href="/" className="policyLink" aria-label="Terms of Use">Terms of Use</a>
          </li>
          <li>
            <a href="/" className="policyLink" aria-label="Privacy Policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/" className="policyLink" aria-label="Cookie Policy">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}