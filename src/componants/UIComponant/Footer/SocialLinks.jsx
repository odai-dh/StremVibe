import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

export default function SocialLinks() {
  return (
    <ul className="social-links">
      <li>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <IoLogoFacebook size={24} />
        </a>
      </li>
    </ul>
  );
}