import Warning from 'Components/Common/Warning'
import Footer from 'Components/Footer/Footer'
import Jobs from 'Components/Jobs/Jobs'
import Navbar from 'Components/Navbar/Navbar'
import { Helmet } from "react-helmet";
import React from 'react'

function JobPortal() {
  return (
    <>
  <Helmet>
        <meta
          name="Job portal"
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
        <title>Job Portal</title>
      </Helmet>
        
        <Navbar/>
        <Jobs/>
       
 <Warning/>
    <Footer/>
    </>
  )
}

export default JobPortal