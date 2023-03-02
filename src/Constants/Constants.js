// import WalletConnect from "@walletconnect/web3-provider";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const TEST_MODE = false;

export const TESTNET_ADDRESSES = {
  Main: "0xbC720e21c0c06b3df0C10Ebdf93D8A930C42288A",
  USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  USDC: "0x64544969ed7EBf5f083679233325356EbE738930",
  BUSD: "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
  DAI: "0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867",
  IBAT: "0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867",
};
export const MAINNET_ADDRESSES = {
  Main: "0xbC720e21c0c06b3df0C10Ebdf93D8A930C42288A",
  USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  USDC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  DAI: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  IBAT: "0x19cd9B8e42d4EF62c3EA124110D5Cfd283CEaC43",
};

export const BSCTestRPCUrl =
  "https://mainnet.infura.io/v3/7b50cd907db34540b993f3209ba55488";
export const BSCMainRPCUrl =
  "https://mainnet.infura.io/v3/7b50cd907db34540b993f3209ba55488";

export const ContractAddr = TEST_MODE ? TESTNET_ADDRESSES : MAINNET_ADDRESSES;
export const RPCUrl = TEST_MODE ? BSCTestRPCUrl : BSCMainRPCUrl;

// export const providerOptions = {
//   walletconnect: {
//     package: WalletConnect, // required
//     options: {
//       infuraId: "7b50cd907db34540b993f3209ba55488", // required
//     },
//   },
//   coinbasewallet: {
//     package: CoinbaseWalletSDK, // Required
//     options: {
//       appName: "Coinbase", // Required
//       infuraId: "7b50cd907db34540b993f3209ba55488", // Required
//     },
//   },
// };

export const TestnetChainID = 1;
export const MainnetChainID = 1;

export const TokenList = ["USDT"];
