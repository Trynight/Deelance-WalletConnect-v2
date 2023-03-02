import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import { Pagination, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

function MobFeauters() {
  const { t } = useTranslation("common");

  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mob-feat"
      >
        <SwiperSlide>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <div className="feat-box">
                  <div className="feat-img">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_11-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695067"
                      alt=""
                    />
                  </div>

                  <h3 className="green">{t("key_features.cards.0.title")}</h3>
                  <p>{t(`key_features.cards.0.description`)}</p>
                  <p> </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feat-box">
                  <div className="feat-img">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_12-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695065"
                      alt=""
                    />
                  </div>

                  <h3 className="green">{t("key_features.cards.1.title")}</h3>
                  <p>{t(`key_features.cards.1.description`)}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <div className="feat-box">
                  <div className="feat-img">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_16-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695045"
                      alt=""
                    />
                  </div>

                  <h3 className="green">{t("key_features.cards.2.title")}</h3>
                  <p>{t(`key_features.cards.2.description`)}</p>
                  <p></p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feat-box">
                  <div className="feat-img">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_15-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695083"
                      alt=""
                    />
                  </div>

                  <h3 className="green">{t("key_features.cards.3.title")}</h3>
                  <p>{t(`key_features.cards.3.description`)}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row justify-content-center align-items-center mtf-60">
              <div className="col-md-4">
                <div className="feat-box">
                  <div className="feat-img">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_13-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695075"
                      alt=""
                    />
                  </div>

                  <h3 className="green">{t("key_features.cards.4.title")}</h3>
                  <p>{t(`key_features.cards.4.description`)}</p>
                  <p> </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feat-box">
                  <div className="feat-img">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/icons/Asset_14-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672928695073"
                      alt=""
                    />
                  </div>

                  <h3 className="green">{t("key_features.cards.5.title")}</h3>
                  <p>{t(`key_features.cards.5.description`)}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MobFeauters;
