import React from "react";
import Accordion from "Components/Accordion";
import DashImg from "../../assets/dash.svg";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="container">
        <div className="faq-grid">
          <div className="faq-head">
            <h1 className="green">{t("Faqs")}</h1>
            <div className=" line-g">
              <img src={DashImg} alt="" />
            </div>
            <div>
              <h4 className="faq-p mt-3 mb-4 white">
                {t(
                  "faq.description",
                  "See some of the most frequently asked questions about Deelance here. Got a question that’s not on the list? Let us know !"
                )}
              </h4>
            </div>
          </div>

          <div className="accordion-list">
            <Accordion title={t("faq.question1", "What is Deelance?")}>
              <p>
                {t(
                  "faq.answer1",
                  "Deelance is building freelancing and Recruitment platform based on Web3. In Deelance the can tokenized the selling assets into NFT to get ownership of the underlying asset or piece of work. With Low fee, Fast payment, transparency and data ownership Deelance is redefining how freelancers connect with potential employers and buyers in metaverse"
                )}
              </p>
            </Accordion>
            <Accordion title={t("faq.question2", "Why Deelance?")}>
              <div className="pt-2"></div>
              <p>{t("✔️Advance Gig Framework with NFT subscription model")}</p>
              <p>{t("✔️Multiple Crypto payment option")}</p>
              <p>{t("✔️NDA ( Buyer & Seller )")}</p>
              <p>{t("✔️On-chain KYC to avoid bad Actors")}</p>
              <p>{t("✔️Extra benefit with Data ownership ")}</p>
              <p>{t("✔️Smart contract escrow")}</p>
              <p>{t("✔️Smart contract job Placements")}</p>
            </Accordion>

            <Accordion title={t("faq.question3", "How can I buy DLANCE?")}>
              <p>
                {t("$DLANCE can be purchased on")}{" "}
                <a href="deelance.com" target="_blank">
                  {t("deelance.com")}
                </a>{" "}
                {t("using ETH, USDT, or via credit card through our partner.")}
              </p>

              <p>
                {t(
                  "You can purchase ETH using your card, then swap for $DLANCE. Ensure you have enough ETH to buy $DLANCE cover the gas fees"
                )}
              </p>
            </Accordion>
            <Accordion title={t("faq.question4", "What is next for Deelance?")}>
              <p>
                {t(
                  "We have big plans for Deelance following our presale! Accelerate the development and adoption of Deelance freelancing platform, Metaverse, App along with NFT Marketplace, and continued onboarding local ambassadors to enhance our Global presence."
                )}
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
