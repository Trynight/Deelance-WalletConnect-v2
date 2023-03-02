import React from "react";
import Mint from "../../assets/seen/mint.png";
import Bct from "../../assets/seen/bct.png";
import Coin from "../../assets/seen/coin.png";
import Crypto from "../../assets/seen/crypto.png";
import Fina from "../../assets/seen/fina.png";
import Krypto from "../../assets/seen/krypto.png";
import Tet from "../../assets/seen/tet.png";
import "./seen.css";
import Marquee from "react-fast-marquee";

function SeenOn() {
  return (
    <section className="seenOn">
      <div className="container">
        <Marquee
          className="seen-grid"
          gradientColor={[17, 24, 39]}
          loop={0}
          speed={50}
        >
          <img
            src={Mint}
            alt=""
            style={{ height: "2rem" }}
            // className="mint"
          />
          <img src={Fina} alt="" style={{ height: "2.6rem" }} />
          <img
            src={Krypto}
            alt=""
            style={{ height: "2.2rem" }}

            //  className="krypto"
          />
          <img src={Coin} alt="" style={{ height: "3rem" }} />
          <img src={Bct} alt="" style={{ height: "3rem" }} />
          <img
            src={Crypto}
            alt=""
            style={{ height: "2rem" }}

            // className="crypto"
          />
          <img src={Tet} alt="" style={{ height: "3rem" }} />
        </Marquee>
      </div>
    </section>
  );
}

export default SeenOn;
