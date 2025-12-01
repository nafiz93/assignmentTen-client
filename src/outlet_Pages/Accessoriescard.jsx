import React from "react";

const Accessoriescard = ({ item }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="w-full h-52 bg-gray-100 flex justify-center items-center overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">

        {/* Product Name */}
        <h2 className="text-xl font-semibold text-gray-800">
          {item.name}
        </h2>

        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full">
          {item.category}
        </span>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {item.description}
        </p>

        {/* Location + Price */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-600 text-sm flex items-center gap-1">
            📍 {item.location}
          </span>

          <span className="text-lg font-bold text-purple-600">
            ${item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Accessoriescard;
