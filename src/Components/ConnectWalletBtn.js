import { useWeb3Modal } from "@web3modal/react";
import React from "react";
import { useAccount } from "wagmi";
import styles from "CSS/ConnectWalletBtn.module.css";
import { useTranslation } from "react-i18next";

function ConnectWalletBtn({ setShowMediaIcons, normal = false }) {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const { t } = useTranslation("common");

  return (
    <button
      className={`${styles.btn} ${normal ? styles.normal : ""}`}
      onClick={() => {
        open();
        setShowMediaIcons(false);
      }}
    >
      {!address ? t("Connect") : ""}{" "}
      {address && (
        <>
          {address.slice(0, 4)}...
          {address.slice(address.length - 4, address.length)}{" "}
        </>
      )}
    </button>
  );
}

export default ConnectWalletBtn;
