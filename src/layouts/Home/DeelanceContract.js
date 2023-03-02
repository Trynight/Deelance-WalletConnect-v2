import React, { useEffect, useState } from "react";
import styles from "CSS/DeelanceContract.module.css";
import { useTranslation } from "react-i18next";
import { FaCopy, FaRegCopy } from "react-icons/fa";

const Box = ({ title, children }) => {
  return (
    <div className={styles.box}>
      <h2 className={styles.boxTitle}>{title}</h2>

      {children}
    </div>
  );
};

function DeelanceContract() {
  const { t } = useTranslation("common");
  const [isCopied, setCopied] = useState(true);
  const [text, setText] = useState(
    "0x7D60dE2E7D92Cb5C863bC82f8d59b37C59fC0A7A"
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopied(false);
    }
  }

  useEffect(() => {
    let timeOut;
    if (isCopied == true) {
      new Promise((resolve) => {
        timeOut = setTimeout(() => {
          resolve();
        }, 2000);
      }).then(() => {
        clearTimeout(timeOut);
        setCopied(false);
      });
    }
  }, [isCopied]);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <header>
          <h1
            className={`${styles.title} green text-center text-uppercase mb-3`}
            style={{ fontWeight: "bold" }}
          >
            {t("Deelance Contract")}
          </h1>

          <p className="text-center white mb-0">
            {t(
              "deelance_contract.subtitle",
              "Use the contract information below to add the $DLANCE token to your wallet."
            )}
          </p>
        </header>

        <main>
          <Box title={t("Address")}>
            <div className={styles.contractAddressWrapper}>
              <div className={styles.addressDiv}>
                <p
                  className={`${styles.subtitle} white mb-0 cut-text`}
                  style={{ "--width": "98%" }}
                >
                  {text}
                </p>
              </div>
              <button
                onClick={handleCopy}
                className={styles.copyTextBtn}
                disabled={isCopied}
              >
                {isCopied ? <FaCopy /> : <FaRegCopy />}
              </button>
            </div>

            <p className={`${styles.warning} mb-0`}>
              {t(
                "deelance_contract.address_title",
                "Please do not send any tokens to this address as they will be lost."
              )}
            </p>
          </Box>

          <Box title={t("Decimal")}>
            <p className={styles.subtitle}>18</p>
          </Box>
          <Box title={t("Network")}>
            <p className={styles.subtitle}>Ethereum</p>
          </Box>
          <Box title={t("Token Symbol")}>
            <p className={styles.subtitle}>$DLANCE</p>
          </Box>
        </main>
      </div>
    </div>
  );
}

export default DeelanceContract;
