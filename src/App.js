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
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig, useProvider  } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";

const chains = [arbitrum, mainnet, polygon];
//console.log(chains[0])
const PROJECT_ID = "4ff178b5adf37e8779469102693e824b";
// Wagmi client
const {provider } = configureChains(chains, [
  walletConnectProvider({ projectId: PROJECT_ID }),
]);



//console.log("provider", provider)
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: PROJECT_ID,
    version: "2", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);




function App() {
  const { open } = useWeb3Modal();
  const [loading, setLoading] = useState(true);
  const defaultProvider = new ethers.providers.JsonRpcProvider(RPCUrl);

  const [provider, setProvider] = useState(defaultProvider);
  const myProvider = useProvider();
  const { address: account } = useAccount();
  const [contracts, setContracts] = useState({
  })

  useEffect(() => {
    if(!account) return;
    const contracts = {};
  
    for (const [token, address] of Object.entries(ContractAddr)) {
      contracts[token] = new ethers.Contract(
        address,
        token === "Main" ? BigNFTABI : BEP20ABI,
        provider
      );
    }
    setContracts(contracts);
    setProvider(myProvider);
  }, [account]);

  contracts.Main =  new ethers.Contract(
    ContractAddr.Main,
    BigNFTABI,
    defaultProvider
  );

  useEffect(() => {
    setLoading(false)
  }, [])
  
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
        <Router>
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
      <Web3Modal
        projectId={PROJECT_ID}
        ethereumClient={ethereumClient}
      />
    </>
  );
}

export default App;
