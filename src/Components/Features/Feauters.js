import React from "react";
import "./Features.css";
import Dash from "../../assets/dash.svg";
import Buss from "../../assets/feature/buss.svg";
import Dollar from "../../assets/feature/doll.svg";
import Escrow from "../../assets/feature/owner.svg";
import Owner from "../../assets/feature/buss.svg";
import Pay from "../../assets/feature/pay.svg";
import Trans from "../../assets/feature/trans.svg";
import MobFeauters from "./MobFeauters";
import { useTranslation } from "react-i18next";

const data = [
  {
    img: Buss,
  },
  {
    img: Trans,
  },
  { img: Escrow },
  { img: Owner },
  { img: Dollar },
  { img: Pay },
];

function Feauters() {
  const { t } = useTranslation("common");

  return (
    <section className="features">
      <div className="container text-center">
        <div className="feat-header">
          <h1>
            {t("Key")} <span className="green">{t("Features")}</span>
          </h1>
          <img src={Dash} alt="" />
        </div>
      </div>

      <MobFeauters data={data} />

      <div className="container desktop-feat">
        <div className="row justify-content-center align-items-center">
          {data.map((item, i) => (
            <div key={i} className="col-md-4">
              <div className="feat-box">
                <div className="feat-img">
                  <img src={item.img} alt="" />
                </div>

                <h3 className="green">{t(`key_features.cards.${i}.title`)}</h3>
                <p>{t(`key_features.cards.${i}.description`)}</p>
                <p> </p>
              </div>
            </div>
          ))}

          {/* <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img src={Trans} alt="" />
              </div>

              <h3 className="green">Transparency</h3>
              <p>
                By implementing an automated dispute system and reputation
                stored on the blockchain. we’re building a trustworthy platform
                all stakeholders can rely on.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img src={Escrow} alt="" />
              </div>

              <h3 className="green">Escrow</h3>
              <p>
                With escrow, Freelancers have the guarantee of payment for their
                services, while the Employer’s funds are safe until the
                Freelancer produces the expected work. As it’s based on smart
                contracts.
              </p>
              <p> </p>
            </div>
          </div> */}
        </div>
        {/* <div className="row justify-content-center align-items-center mtf-60">
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img src={Owner} alt="" />
              </div>

              <h3 className="green">Ownership</h3>
              <p>
                With NFT (NFT) get ownership of the underlying asset or piece of
                work. NFTs can represent: art, music, photographs, designs, web
                pages, animations, videos, royalty or copyright of work etc.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img src={Dollar} alt="" />
              </div>

              <h3 className="green">Low Fees</h3>
              <p>
                Our decentralized and reputation stored on the blockchain.
                freelance market ecosystem alower fees by directly connecting
                Employers and Freelancers.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img src={Pay} alt="" />
              </div>

              <h3 className="green">Fast Payments</h3>
              <p>
                You can use Crypto get paid for your services quickly and avoid
                currency exchange and possible commission rates{" "}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Feauters;
