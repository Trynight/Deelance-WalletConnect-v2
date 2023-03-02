import React, { useState } from "react";
import "./Hero.css";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Model from "Components/Popup/Model";
import Lottie from "react-lottie";
import Hero_lot from "./bg";
import PresaleMain from "Components/Presale/Presale_main";
import { useTranslation } from "react-i18next";
import UpperSection from "./UpperSection";
import LowerSection from "./LowerSection";

function Hero() {
  const [isModal, setIsModal] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hero_lot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { t } = useTranslation("common");

  return (
    <>
      <section className="hero-home">
        <div className="container">
          {/* <UpperSection setIsModal={setIsModal} />
          <LowerSection /> */}

          <div
            className="row justify-content-center"
            style={{ position: "relative" }}
          >
            <div className="col-md-6">
              <h1>
                {t("Creating")}{" "}
                <span className="green"> {t("Web3 Space")} </span>
                {t("For Better World to")}{" "}
                <span className="green">{t("Work Together")}</span>
              </h1>
              <p className="hero-sp-p">{t("hero.hero_details")}</p>
              <div className="hero-btn">
                <button
                  href="/"
                  className="hero-btn-1"
                  onClick={() => setIsModal(true)}
                >
                  {t("Sign Up")} <AiOutlineArrowRight />
                </button>

                {/* <button className="hero-btn-2">{t("buttons.buy_now")}</button> */}
              </div>
              <div className="presale-hero-box">
                <PresaleMain />
              </div>
            </div>

            <div
              className="col-md-6 text-center align-items-center hero-gif-and-links"
              style={{ position: "relative" }}
            >
              <div className="second-img">
                <Lottie options={defaultOptions} className="loti-1" />
              </div>

              <div className="hero-links-and-verified-wrapper">
                <div className="contract-verification-banner">
                  <div className="audit-kyc">
                    <p className="verification-banner-title font-inter text-white mb-0">
                      {t("Audit and KYC | 100% Secured and Verified")}
                    </p>
                  </div>
                  <div className="audit-images">
                    <img src="images/logo1.png" alt="" />
                    <div
                      style={{
                        height: "20px",
                        border: "1px solid rgba(255,255,255,.3)",
                      }}
                    ></div>
                    <img src="images/coinsult-logo.svg" alt="" />
                  </div>
                </div>

                <div className="hero-ss">
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
                  <a
                    href="https://medium.com/@deeLance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaMedium />
                  </a>
                  <a
                    href="https://t.me/deelance_com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/deelance"
                    target="_blank"
                    rel="noreferrer"
                  >
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
            </div>
          </div>
        </div>

        <div className="pop-up-sign">
          {isModal && <Model setIsModal={setIsModal} />}
        </div>
      </section>
    </>
  );
}

export default Hero;
