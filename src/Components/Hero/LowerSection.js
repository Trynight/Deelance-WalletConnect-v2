import React from "react";
import PresaleMain from "Components/Presale/Presale_main";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

function LowerSection() {
  return (
    <div className="lower-section-wrapper">
      <div className="lower-section-presale">
        <PresaleMain />
      </div>

      <div className="lower-section-social-links">
        <a
          href="https://twitter.com/deelance_com"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100087266006183"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a href="https://medium.com/@deeLance" target="_blank" rel="noreferrer">
          <FaMedium />
        </a>
        <a href="https://t.me/deelance_com" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://discord.gg/vhH3Sbt9NQ"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord />
        </a>
        <a
          href="https://www.instagram.com/deelanceofficial/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default LowerSection;
