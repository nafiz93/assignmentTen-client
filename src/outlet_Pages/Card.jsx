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
      className="cursor-pointer bg-white shadow-lg rounded-lg px-6 py-4 text-center font-semibold"
      whileHover={{
        scale: 1.08,
        y: -10,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {link}
    </motion.div>
  );
};

export default Card;
