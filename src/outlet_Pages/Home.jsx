import React from "react";
import bg_image from "../assets/images/dog bg.png";
import Card from "./Card";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/free-mode";

// Swiper modules
import { FreeMode, Autoplay } from "swiper/modules";

const Home = () => {
  const links = ["Pets", "Pet Food", "Accessories", "Pet Care Products"];

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 h-full bg-black/20"></div>

      <div className="relative z-10 pt-10 px-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
              pauseOnMouseEnter: true,   
          }}
          loop={true}
          allowTouchMove={false}
          modules={[FreeMode, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {links.map((link, i) => (
            <SwiperSlide key={i}>
              <Card link={link} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
