import React from "react";
import bg_image from "../assets/images/dog bg.png";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
    >
        <div className="absolute h-full inset-0 bg-black/20"></div>
      <h3 className="text-white text-3xl font-bold p-10">
        this is the welcome page
      </h3>
    </div>
  );
};

export default Home;
