import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${link}`);
  };

  return (
    <motion.div
      onClick={handleClick}
   className="cursor-pointer 
           bg-white/30 
           backdrop-blur-md 
           border border-white/10 
           shadow-xl 
           rounded-lg 
           px-6 py-4 
           text-left font-semibold 
           flex items-start gap-4"


      whileHover={{
        scale: 1.08,
        y: -10,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {/* Left-Side Image */}
      {link === "Pet Food" && (
        <img
          src="https://i.ibb.co/Z6rKqxr7/image.png"
          alt=""
          className="w-20 h-20 object-cover rounded-lg"
        />
      )}

      {link === "Pets" && (
        <img
          src="https://i.ibb.co/dwMQh1Vd/image.png"
          alt=""
          className="w-20 h-20 object-cover rounded-lg"
        />
      )}

      {link === "Accessories" && (
        <img
          src="https://i.ibb.co/ZRPPskjP/image.png"
          alt=""
          className="w-20 h-20 object-cover rounded-lg"
        />
      )}

      {link === "Pet Care Products" && (
        <img
          src="https://i.ibb.co/fdb1RwDz/image.png"
          alt=""
          className="w-20 h-20 object-cover rounded-lg"
        />
      )}

      {/* Text */}
      <div className="flex flex-col justify-center">
        {link}
      </div>
    </motion.div>
  );
};

export default Card;
