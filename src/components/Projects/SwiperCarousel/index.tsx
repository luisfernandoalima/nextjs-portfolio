"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "./SwiperCarousel.scss";

export const SwiperCarousel = ({ images }: { images: StaticImageData[] }) => {
  return (
    <div className="SwiperCarousel">
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} alt={`Image 0${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
