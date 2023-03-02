import React from "react";
import "./NFTTopSellers.css";
import { topSellerImg } from "../../assets/assets/images";

function NFTTopSellers() {
  return (
    <>
      <section className="top-seller">
        <div className="container ">
        <div className="nft-border-dashed-cover">{ Array.from({ length:20}).map((_, index) => {
            return(<span key={index} className ="nft-border-dashed"> </span>)
          })
        }</div>
          {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> */}
          <div className="top-seller-head text-center ">
            <h1>Top Sellers</h1>
            <span>[Last 30 Days]</span>
          </div>
          <div className="row justify-content-center align-items-center ">
            <div className="col-md-4 col-4 ">
              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-4 ">
              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-4 ">
              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>

              <div className="row  text-center margin-top-bottom-10px">
                <div className="col-md-4 col-4">
                  <div className="top-seller-img-box">
                    <span>1.</span>
                    <div className="top-seller-img">
                      <img src={topSellerImg} alt="" className="fox" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-5">
                  <div className="top-seller-name">
                    Monica Lucas
                    <div>@Monica</div>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="top-seller-name">
                    4.2 ETH
                    <div>$4,823</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nft-border-dashed-cover">{ Array.from({ length:20}).map((_, index) => {
            return(<span key={index} className ="nft-border-dashed"> </span>)
          })
        }</div>
        
        </div>
      </section>
    </>
  );
}

export default NFTTopSellers;
