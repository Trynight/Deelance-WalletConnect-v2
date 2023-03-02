import Warning from "Components/Common/Warning";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import Rewards from "Components/Rewards/Rewards";
import React from "react";
import { Helmet } from "react-helmet";

function Reward() {
  return (
    <>

<Helmet>
        <meta
          name="Win100k"
          content="Participate in giveaway and win $100,000  worth of $Dlance"
        />
        <meta
          name="keywords"
          content="Freelance, fiver , upwork , jobs , NFT , content , marketing, freelancers, works , metaverse, web3, Binance,Deelance,
    freelancer,upwork freelancer,Fiver,freelancer website,freelancer affiliate program,freelancer accounting jobs,freelancer app developer,account freelancer,best freelancer sites,become a freelancer on fiverr,freelancer customer service,freelance content writer,canva freelancer,freelancer digital marketer ,freelancer earning, 
jobs,indeed jobs, 
jobs near me, 
jobs hiring near me,work from home jobs,jobs available near me,nft marketplace,nft marketplace list,nft marketplace ranking,nft marketplace crypto,nft marketplace github,nft marketplace website,nft marketplace aggregator,nft marketplace as a service,metaverse,metaverse meaning,facebook metaverse,mark zuckerberg metaverse,sandbox metaverse,how to invest in metaverse,metaverse game
,digital marketing,blockchain developer"
        />
        <meta
          name="description"
          content="All you have to do is follow the steps described in the widget on this page to receive multiple entries, and hold at least $100 of $Dlance at the time of the draw."
        />
        <title>Win100k</title>
      </Helmet>
      <Navbar />
      <Rewards />

      <Warning />
      <Footer />
    </>
  );
}

export default Reward;
