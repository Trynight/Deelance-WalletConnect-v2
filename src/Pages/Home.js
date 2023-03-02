import React from "react";
import About from "../Components/About/About";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Features from "../Components/Features/Feauters";
import Find from "../Components/Find/Find";
import Footer from "../Components/Footer/Footer";
import WhyUs from "../Components/WhyUs/WhyUs";
import Tokenomic from "Components/Token/Tokenomic";
import Raod from "Components/Roadmap/Raod";
import { Helmet } from "react-helmet";
import CookieConcent from "Components/CookieConcent";
import Warning from "Components/Common/Warning";
import SeenOn from "Components/SeenOn/SeenOn";
import FAQ from "layouts/Home/FAQ";

function Home() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Deelance is a Decentralized freelancing and Recruitment platform based on Web3"
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
          content="Deelance is a freelancing platform based on Web3. The platform is integrated within Nft's and Metaverse so buyer and seller not only buy or sell but also experience the features of Metaverse World"
        />
        <title>Home</title>
      </Helmet>

      <Navbar />
      {/* <NavbarNew /> */}

      <Hero />

      <SeenOn />

      <Features />

      <div id="about-us">
        <About />
      </div>

      <Find />

      <WhyUs />

      <Tokenomic />

      <Raod />

      <div className="pb-5 mb-5">
        <FAQ />
      </div>

      <Warning />

      <Footer />

      <CookieConcent />
    </>
  );
}

export default Home;
