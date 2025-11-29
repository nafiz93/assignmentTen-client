import React from "react";
import bg_image from "../assets/images/dog bg.png";
import Card from "./Card";

const Home = () => {
   const links = ["Pets", "Pet Food", "Accessories", "Pet Care Products"];

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 h-full bg-black/20"></div>

      <div className="relative z-10 flex flex-wrap gap-6 justify-center pt-10">
        {links.map((link, i) => (
          <Card key={i} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Home;
