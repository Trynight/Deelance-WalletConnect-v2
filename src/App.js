import "bootstrap/dist/css/bootstrap.min.css";
import Academy from "Pages/Academy";
import HowBuy from "Pages/HowBuy";
import JobPortal from "Pages/JobPortal";
import NftMarket from "Pages/NftMarket";
import Privacy from "Pages/Privacy";
import Reward from "Pages/Reward";
import Risk from "Pages/Risk";
import TeamPage from "Pages/TeamPage";
import Terms from "Pages/Terms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/404Page";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { BEP20ABI, BigNFTABI } from "./Constants/ABI";
import { ContractAddr, RPCUrl } from "./Constants/Constants";
import UserContext from "./UserContext";
import "./App.css";
import { Circles } from "react-loader-spinner";
import { useProvider, useAccount, useSigner } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";

function App() {
  const { open } = useWeb3Modal();
  const [loading, setLoading] = useState(true);
  const defaultProvider = new ethers.providers.JsonRpcProvider(RPCUrl);
  const { data: signer, isError, isLoading } = useSigner();

  const [provider, setProvider] = useState(defaultProvider);
  const { address: account } = useAccount();
  const [contracts, setContracts] = useState({});
  const myProvider = useProvider();

  useEffect(() => {
    if (!signer?.provider) return;
    const contracts = {};

    for (const [token, address] of Object.entries(ContractAddr)) {
      contracts[token] = new ethers.Contract(
        address,
        token === "Main" ? BigNFTABI : BEP20ABI,
        signer
      );
    }
    setContracts(contracts);
    setProvider(myProvider);
  }, [signer]);

  if (account) {
    contracts.Main = new ethers.Contract(ContractAddr.Main, BigNFTABI, signer);
  } else {
    contracts.Main = new ethers.Contract(
      ContractAddr.Main,
      BigNFTABI,
      defaultProvider
    );
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="-app-loader">
        <Circles height="80" width="80" color="#00a652" />
        <h2 className="green">Deelance</h2>
      </div>
    );
  }

  return (
    <>
      <UserContext.Provider
        value={{
          provider,
          account,
          contracts,
          connectWallet: open,
          disconnectWallet: open,
        }}
      >
        {/* <Router basename="/Deelance-WalletConnect-v2"> */}
        <Router basename="/Deelance-WalletConnect-v2">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/nft-market" element={<NftMarket />} />
            <Route exact path="/job-portal" element={<JobPortal />} />
            <Route exact path="/academy" element={<Academy />} />
            <Route exact path="/team" element={<TeamPage />} />
            <Route exact path="/privacy-policy" element={<Privacy />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/risk" element={<Risk />} />
            <Route exact path="/rewards" element={<Reward />} />
            <Route exact path="/how-to-buy" element={<HowBuy />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
