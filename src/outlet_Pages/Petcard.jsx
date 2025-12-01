import React from "react";

const Petcard = ({ card }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image Section */}
      <div className="w-full h-52 bg-gray-100 flex justify-center items-center overflow-hidden">
        <img
          src={card.image}
          alt={card.name}
          className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">

        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">
          {card.name}
        </h2>

        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">
          {card.category}
        </span>

        {/* Location + Price */}
        <div className="flex justify-between items-center pt-2">

          <div className="text-gray-600 text-sm flex items-center gap-1">
            <span>📍</span> {card.location}
          </div>

          <span className="text-lg font-bold text-green-600">
            ${card.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Petcard;
