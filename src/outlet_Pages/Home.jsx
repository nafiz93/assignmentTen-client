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

  // Example static pet heroes (replace with DB data later)
  const heroes = [
    {
      name: "Emily & Bruno",
      desc: "Rescued Bruno from a shelter and gave him a loving forever home.",
      img: "https://i.ibb.co/RGXgCrfG/image.png",
    },
    {
      name: "Jake the Caregiver",
      desc: "Volunteers weekly to take care of abandoned pets in the community.",
      img: "https://i.ibb.co/Q3Lt2s2n/image.png",
    },
    {
      name: "Sarah & Milo",
      desc: "Adopted a sick puppy and helped him recover into a healthy companion.",
      img: "https://i.ibb.co/bM9VT51r/image.png",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
    >
      <div className="relative z-10 pt-2 px-4">

        {/* ========== CATEGORY SLIDER ========== */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
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

        <h1 className="mb-6 ml-2 text-gray-500 text-xl font-bold drop-shadow-lg">
          Listing Categories
        </h1>

       
        <section className="bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-500 mb-3">
            🐾 Why Adopt from PawLuxe?
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            At PawLuxe, we believe every pet deserves love, safety, and a caring home.
            Adoption not only saves a life but also adds joy, comfort, and 
            companionship to your family. When you adopt, you’re helping reduce 
            homelessness and giving a pet a second chance at happiness.
          </p>
        </section>

        
        
        <section className="bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-gray-500 mb-5">
            🐶 Meet Our Pet Heroes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {heroes.map((hero, i) => (
              <div
                key={i}
                className="bg-white/40 backdrop-blur-sm shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={hero.img}
                  alt={hero.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {hero.name}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">{hero.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
