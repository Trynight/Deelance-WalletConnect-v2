import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/swiper.min.css";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

import Dash from "../../assets/dash.svg";
import Dee from "../../assets/main-logo.svg";
import Fiver from "../../assets/fiver.png";
import Freelance from "../../assets/freela.png";
import Upwork from "../../assets/Upwork.png";
import { Navigation } from "swiper";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const FullCol = ({ img, items, textAlign = "center" }) => {
  return (
    <div className="content-2" style={{ textAlign }}>
      {img && (
        <div className="why-content-img-head">
          <img src={img} alt="" />
        </div>
      )}

      {items.map((item, i) => (
        <div key={i} className="" style={{ minWidth: "100%" }}>
          {item === "TICK" && (
            <p className="green">
              <AiOutlineCheckCircle />
            </p>
          )}
          {item === "CROSS" && (
            <p className="cross">
              <MdOutlineCancel />
            </p>
          )}
          {item !== "TICK" && item !== "CROSS" ? <p>{item}</p> : null}
          <hr />
        </div>
      ))}
    </div>
  );
};

function MobWhyus({ keys }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { t } = useTranslation("common");

  return (
    <>
      <div className="container-fluid mob-why-swiper">
        <div className="why-us-head text-center">
          <h1>
            {t("Why")} <span className="green">{t("Deelance")}</span>{" "}
          </h1>
          <img src={Dash} alt="" />
        </div>
        <div className="why-us-box" style={{ position: "relative" }}>
          <div className="navigatoion-buttons">
            <button ref={navigationPrevRef}>
              <HiArrowNarrowLeft />
            </button>
            <button ref={navigationNextRef}>
              <HiArrowNarrowRight />
            </button>
          </div>

          <div className="why-us-box-left">
            <FullCol textAlign="left" items={keys} />

            {/* <div className="">
              <div className="content">
                <div className="border-down">
                  <p>Client Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Freelancer Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Withdrawal Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Decentralized</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Content Ownership</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Efficient Escrow</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>No Limit on task size</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>scalable dispute system</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>NFT / Metaverse</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Staff Recruitment</p>
                  <hr />
                </div>
              </div>
            </div> */}
          </div>

          <Swiper
            modules={[Navigation]}
            className="why-us-box-right"
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params) {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
          >
            <SwiperSlide>
              <FullCol
                img={Dee}
                items={[
                  "2%",
                  "10%",
                  "Crypto/Instant",
                  "TICK",
                  "TICK",
                  "TICK",
                  "TICK",
                  "TICK",
                  "TICK",
                  "TICK",
                ]}
              />
              {/* <div className="row justify-content-center ">
                <div className="col-md-2 col-6">
                  <div className="content-2 text-center">
                    <div className="why-content-img-head">
                      <img src={Dee} alt="" />
                    </div>
                    <div className="">
                      <p>2%</p>
                      <hr />
                    </div>
                    <div className="">
                      <p>10%</p>
                      <hr />
                    </div>
                    <div className="">
                      <p>Crypto/Instant</p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="green">
                        <AiOutlineCheckCircle />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="green">
                        <AiOutlineCheckCircle />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="green">
                        <AiOutlineCheckCircle />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="green">
                        <AiOutlineCheckCircle />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="green">
                        <AiOutlineCheckCircle />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="green">
                        <AiOutlineCheckCircle />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="green">
                        <AiOutlineCheckCircle />
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div> */}
            </SwiperSlide>

            <SwiperSlide>
              <FullCol
                img={Freelance}
                items={[
                  "3%",
                  "10%",
                  "Min payout $100",
                  "CROSS",
                  "CROSS",
                  "No/partial",
                  "CROSS",
                  "CROSS",
                  "CROSS",
                  "CROSS",
                ]}
              />

              {/* <div className="row justify-content-center ">
                <div className="col-md-2 col-6">
                  <div className="content-3 text-center">
                    <div className="why-content-img-head">
                      <img src={Freelance} alt="" />
                    </div>
                    <div className="">
                      <p>3%</p>
                      <hr />
                    </div>
                    <div className="">
                      <p>10%</p>
                      <hr />
                    </div>
                    <div className="short-dis">
                      <p>Min payout $100</p>

                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p>No/partial</p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div> */}
            </SwiperSlide>

            <SwiperSlide>
              <FullCol
                img={Upwork}
                items={[
                  "3.5%",
                  "20%",
                  "Min payout $100",
                  "CROSS",
                  "CROSS",
                  "No/partial",
                  "CROSS",
                  "CROSS",
                  "CROSS",
                  "CROSS",
                ]}
              />

              {/* <div className="row  justify-content-center ">
                <div className="col-md-2 col-6">
                  <div className="content-4 text-center">
                    <div className="why-content-img-head">
                      <img src={Upwork} alt="" />
                    </div>
                    <div className="up-work">
                      <p style={{ marginBottom: "0px" }}>3.5%</p>
                      <hr />
                    </div>
                    <div className="">
                      <p>20%</p>
                      <hr />
                    </div>
                    <div className="short-dis">
                      <p>Min payout $100</p>

                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p>No/partial</p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div> */}
            </SwiperSlide>

            <SwiperSlide>
              <FullCol
                img={Fiver}
                items={[
                  "3.5%",
                  "20%",
                  "Min payout $100",
                  "CROSS",
                  "CROSS",
                  "No/partial",
                  "CROSS",
                  "CROSS",
                  "CROSS",
                  "CROSS",
                ]}
              />

              {/* <div className="row  justify-content-center ">
                <div className="col-md-2 col-6">
                  <div className="content-5 text-center">
                    <div className="why-content-img-head">
                      <img src={Fiver} alt="" />
                    </div>
                    <div className="up-work">
                      <p style={{ marginBottom: "0px" }}>3.5%</p>
                      <hr />
                    </div>
                    <div className="">
                      <p>20%</p>
                      <hr />
                    </div>
                    <div className="short-dis">
                      <p>Min payout $100</p>

                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p>No/partial</p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                    <div className="">
                      <p className="cross">
                        <MdOutlineCancel />
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MobWhyus;
