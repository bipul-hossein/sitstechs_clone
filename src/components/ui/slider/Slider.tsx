"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bannerItems = [
  { img: "/banner/about.png" },
  { img: "/banner/carrer.png" },
  { img: "/banner/contract.png" },
  { img: "/banner/services.png" },
  { img: "/banner/slolution.png" },
  { img: "/banner/training.png" },

];

const Slider: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bannerItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div>
              <Image src={item.img} alt="" priority width={1920} height={1080} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .swiper-pagination-bullet-active {
          background-color: red !important;
        }
      `}</style>
    </>
  );
};

export default Slider;
