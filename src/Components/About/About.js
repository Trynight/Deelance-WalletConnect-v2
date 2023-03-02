import "./About.css";
import { AiOutlineCheckCircle, AiOutlineArrowRight } from "react-icons/ai";
import Lottie from "react-lottie";
import Meta from "./about.json";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("common");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Meta,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="about">
      <div className="container">
        <div className="about-box">
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                {/* <img
                  src={`https://ik.imagekit.io/cforcrypto/image_${scrolled.toString().padStart (4, '0')}.png`}
                  alt=""
                  className="about-img-1"
                /> */}
                <Lottie
                  options={defaultOptions}
                  className="loti-1"
                  width="auto"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="head-about-txt">
                <h1>
                  {t("About")} <span className="green">{t("Us")}</span>
                </h1>
              </div>
              <div className="about-details">
                <p>{t("about_us.description")}</p>
              </div>
              <div className="list-box">
                {new Array(3).fill("").map((_, i) => (
                  <div key={i}>
                    <h3 className="green">
                      <AiOutlineCheckCircle /> {t(`about_us.points.${i}.title`)}
                    </h3>
                    <p>{t(`about_us.points.${i}.description`)}</p>
                  </div>
                ))}

                {/* <h3 className="green">
                  <AiOutlineCheckCircle /> 2% Commission{" "}
                </h3>
                <p>Only 2% Commission lowest In the Industry</p>

                <h3 className="green">
                  <AiOutlineCheckCircle /> Instant Withdrawal
                </h3>
                <p>
                  Unlimited ownership Instant Withdrawal recruitment platform
                </p> */}
              </div>
              <div className="gp-1">
                <a href="/" className="demo-btn">
                  {t("buttons.buy_now")} <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
