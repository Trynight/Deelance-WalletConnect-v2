import React from "react";
import "./Find.css";
import Lottie from "react-lottie";
import Meta from "./metav.json";
import { useTranslation } from "react-i18next";

function Find() {
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
    <section className="find">
      <div className="bg-dework">
        <div className="container">
          <div className="row justify-content-center align-items-center ">
            <div className="col-md-6">
              <div className="meta-1">
                <h1>
                  {t("Find Freelancer In")}{" "}
                  <span className="green">{t("Metaverse")}</span>{" "}
                </h1>
                <p>
                  {t(
                    "find.description_1",
                    "Deelance ” is a project that creates unique contents on Metaverse technology that is a huge trend around the world. Its aim is to move people to another dimension within the digital universe."
                  )}
                </p>
                <p>
                  {" "}
                  {t(
                    "find.description_2",
                    "Metaverse - where buyers can interact with freelancers in the office space and  a discussion"
                  )}
                </p>
              </div>
              <div className="gp-2">
                <a
                  href="https://demo.corporate-metaverse.com/join"
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  {t("buttons.demo", "DEMO")}
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center meta-img">
                {/* <img src="https://ik.imagekit.io/cforcrypto/Dework/merged.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672669567704" alt=""/> */}
                <Lottie
                  options={defaultOptions}
                  className="loti-1"
                  width="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Find;
