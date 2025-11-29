import React from "react";
import { Link } from "react-router-dom";

const Card = ({ link }) => {
  return (
    <Link to={`/category/${link}`}>
      <div className="card bg-base-100 w-96 shadow-sm cursor-pointer hover:shadow-lg transition">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="card"
            className="rounded-xl"
          />
        </figure>
        <button>view</button>
      </div>
    </Link>
  );
};

export default Card;
