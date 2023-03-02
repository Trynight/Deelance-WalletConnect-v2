import { useWeb3Modal } from "@web3modal/react";
import React from "react";
import { useAccount } from "wagmi";
import styles from "CSS/ConnectWalletBtn.module.css";

function ConnectWalletBtn({ setShowMediaIcons, normal = false }) {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  return (
    <button
      className={`${styles.btn} ${normal ? styles.normal : ""}`}
      onClick={() => {
        open();
        setShowMediaIcons(false);
      }}
    >
      {!address ? "Connect" : ""}{" "}
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
