import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./NFTPartners.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { metamaskImg } from "../../assets/assets/images";

function NFTPartners() {
  return (
    <>
      <section className="nft-partners">
        <div className="container">
          {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> */}
          <div className="row justify-content-center align-items-center">
            <div className="col-md-2 col-2">
              <div className="text-center partner-box">
                <img src={metamaskImg} alt="" className="fox" />
                Metamask
              </div>
            </div>
            <div className="col-md-2 col-2">
              <div className="text-center partner-box">
                <img src={metamaskImg} alt="" className="fox" />
                Bitski
              </div>
            </div>
            <div className="col-md-2 col-2">
              <div className="text-center partner-box">
                <img src={metamaskImg} alt="" className="fox" />
                Fortmatic
              </div>
            </div>
            <div className="col-md-2 col-2">
              <div className="text-center partner-box">
                <img src={metamaskImg} alt="" className="fox" />
                Walletconnect
              </div>
            </div>
            <div className="col-md-2 col-2">
              <div className="text-center partner-box">
                <img src={metamaskImg} alt="" className="fox" />
                coinbase
              </div>
            </div>
            <div className="col-md-2 col-2">
              <div className="text-center partner-box">
                <img src={metamaskImg} alt="" className="fox" />
                Venly
              </div>
            </div>
          </div>         
        </div>
      </section>
    </>
  );
}

export default NFTPartners;
