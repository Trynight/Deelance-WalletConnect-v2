import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import Lottie from "react-lottie";
import Hero_lot from "./bg";

function UpperSection({ setIsModal }) {
  const { t } = useTranslation("common");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hero_lot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="hero-upper-section">
      <div className="hero-upper-section-left">
        <h1>
          {t("hero.title.creating")}{" "}
          <span className="green"> {t("hero.title.web3_space")} </span>
          {t("hero.title.For_Better")}{" "}
          <span className="green">{t("hero.title.work_together")}</span>
        </h1>
        <p className="hero-sp-p">{t("hero.hero_details")}</p>
        <div className="hero-btn">
          <button
            href="/"
            className="hero-btn-1"
            onClick={() => setIsModal(true)}
          >
            {t("buttons.sign_up")} <AiOutlineArrowRight />
          </button>
          <button className="hero-btn-2">{t("buttons.buy_now")}</button>
        </div>
      </div>

      <div className="hero-upper-gif">
        <Lottie options={defaultOptions} className="loti-1" />
      </div>
    </div>
  );
}

export default UpperSection;
