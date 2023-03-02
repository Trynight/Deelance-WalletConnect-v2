import NFT from "Components/NFT/NFT";
import NFTTrending from "Components/NFT Trending/NFTTrending";
import NFTPopCat from "Components/NFT Popular cat/NFTPopCat";
import React from "react";
import Navbar from "Components/Navbar/Navbar";
import Footer from "Components/Footer/Footer";
import Warning from "Components/Common/Warning";
import { Helmet } from "react-helmet";
function NftMarket() {
  return (
    <>
      
<Helmet>
        <meta
          name="NFT Marketplace"
          content="Explore exclusive NFT’s by the most in-demand creators, trade with other collectors in the Marketplace, and mint your own NFTs all in one place."
        />
        <meta
          name="keywords"
          content="Freelance, fiver , upwork , jobs , NFT , content , marketing, freelancers, works , metaverse, web3, Binance,Deelance"
        />
        <meta
          name="description"
          content="Explore exclusive NFT’s by the most in-demand creators, trade with other collectors in the Marketplace, and mint your own NFTs all in one place."
        />
        <title>NFT Marketplace</title>
      </Helmet>
        
       
       <Navbar/>
        <NFT />
        <NFTPopCat />
        <NFTTrending />
      <Warning/>
      <Footer/>
      
    </>
  );
}

export default NftMarket;
