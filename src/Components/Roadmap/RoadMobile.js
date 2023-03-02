import { Swiper, SwiperSlide } from "swiper/react";
import { GoPrimitiveDot } from "react-icons/go";

import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import { Pagination, Autoplay } from "swiper";
import DotLine from "../../assets/dot1.svg";
import { useTranslation } from "react-i18next";

function RoadMobile({ data }) {
  const { t } = useTranslation("common");

  return (
    <div className="mob-road">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={item.className}>
              <div className="text-center rb-img">
                <img src={DotLine} alt="" style={{ width: "auto" }} />
              </div>
              <div className="text-center">
                <h1>{t(item.question)}</h1>
                <p>({t(item.duration)})</p>
              </div>

              <div className="rd-b">
                {item.points.map((point, i2) => (
                  <p key={i2}>
                    <GoPrimitiveDot /> {t(point)}{" "}
                  </p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="box-road-1">
            <div className="text-center rb-img">
              <img src={DotLine} alt="" style={{ width: "auto" }} />
            </div>
            <div className="text-center">
              <h1>Q4 2022</h1>
              <p>(Nov - Dec)</p>
            </div>

            <div className="rd-b">
              <p>
                <GoPrimitiveDot /> Initial Project Plan{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Website Design{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Website Live{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Initial Smart-contracts Deployment{" "}
              </p>
            </div>
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <div className="box-road-2">
            <div className="text-center rb-img">
              <img src={DotLine} alt="" style={{ width: "auto" }} />
            </div>
            <div className="text-center">
              <h1>Q1 2023</h1>
              <p>(Jan - Mar)</p>
            </div>

            <div className="rd-b">
              <p>
                <GoPrimitiveDot /> PreSale{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Contract Testing{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Project Prototype{" "}
              </p>

              <p>
                <GoPrimitiveDot /> Metaverse Demo (Alpha ){" "}
              </p>
              <p>
                <GoPrimitiveDot /> CMC and CG Listing{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box-road-3">
            <div className="text-center rb-img">
              <img src={DotLine} alt="" style={{ width: "auto" }} />
            </div>
            <div className="text-center">
              <h1>Q2 2023</h1>
              <p>(March - April)</p>
            </div>

            <div className="rd-b">
              <p>
                <GoPrimitiveDot /> Token Launch{" "}
              </p>
              <p>
                <GoPrimitiveDot /> NFT Launch{" "}
              </p>
              <p>
                <GoPrimitiveDot /> NFT MarketPlace{" "}
              </p>

              <p>
                <GoPrimitiveDot /> Freelance Platform Launch(Beta Version)
              </p>
              <p>
                <GoPrimitiveDot /> Exchanges Listing{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Metaverse Development{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box-road-4">
            <div className="text-center rb-img">
              <img src={DotLine} alt="" style={{ width: "auto" }} />
            </div>
            <div className="text-center">
              <h1>Q3 2023</h1>
              <p>(May - June)</p>
            </div>

            <div className="rd-b">
              <p>
                <GoPrimitiveDot /> App Development{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Metaverse Integration(Beta version){" "}
              </p>
              <p>
                <GoPrimitiveDot /> Further Development{" "}
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default RoadMobile;
