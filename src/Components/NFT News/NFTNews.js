import React from "react";
import "./NFTNews.css";
import { NFTNews1 } from "../../assets/assets/images";

function NFTNews() {
  return (
    <>
      <section className="nft-news">
        <div className="container ">
          <div className="nft-news-head text-center ">
            <h1>
              Latest <span className="green">News</span>
            </h1>
          </div>
          <div className="nft-news-outerbox">
            <div className="justify-content-center align-items-center">
              <div className="nft-news-grid-container ">
                <div className="news-nft-box">
                  <img src={NFTNews1} />
                  <div className="nft-news-test-wrapper">
                    <div className="nft-news-text-date">Novmeber 30, 2022</div>
                    <div className="nft-news-text-head">
                      How to create an NFT
                    </div>
                    <div className="nft-news-text-cont">
                      The NFT can be associated with a particular digital or
                      physical asset such as images, art, music, and sport
                      highlights and may confer licensing rights....
                    </div>
                  </div>
                </div>

                <div className="news-nft-box">
                  <img src={NFTNews1} />
                  <div className="nft-news-test-wrapper">
                    <div className="nft-news-text-date">Novmeber 30, 2022</div>
                    <div className="nft-news-text-head">
                      How to create an NFT
                    </div>
                    <div className="nft-news-text-cont">
                      The NFT can be associated with a particular digital or
                      physical asset such as images, art, music, and sport
                      highlights and may confer licensing rights....
                    </div>
                  </div>
                </div>

                <div className="news-nft-box">
                  <img src={NFTNews1} />
                  <div className="nft-news-test-wrapper">
                    <div className="nft-news-text-date">Novmeber 30, 2022</div>
                    <div className="nft-news-text-head">
                      How to create an NFT
                    </div>
                    <div className="nft-news-text-cont">
                      The NFT can be associated with a particular digital or
                      physical asset such as images, art, music, and sport
                      highlights and may confer licensing rights....
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NFTNews;
