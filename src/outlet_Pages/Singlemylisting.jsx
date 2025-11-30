import React from "react";
import { Link } from "react-router";



const Singlemylisting = ({ singlelist }) => {
    console.log(singlelist)
  return (
    <div className="max-w-sm backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-2xl overflow-hidden my-4"
>
      <img
        className="w-[50%] mx-auto h-48 object-cover my-4"
        src={singlelist.image}
        alt={singlelist.name}
      />

      <div className="p-4 space-y-2 w-[50%] mx-auto">
        <h2 className="text-xl font-semibold text-gray-800">
          {singlelist.name}
        </h2>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Category:</span> {singlelist.category}
        </p>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Price:</span> ${singlelist.price}
        </p>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Location:</span> {singlelist.location}
        </p>

        <p className="text-sm text-gray-700">{singlelist.description}</p>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Seller Email:</span>{" "}
          {singlelist.email}
        </p>
       <div className="flex items-center gap-2">
      <Link to={`/editlisting/${singlelist._id}`}> <button className="btn btn-soft btn-success">Edit</button></Link>
        
        <button className="btn btn-soft btn-warning">Delete</button>
       </div>
      </div>
    </div>
  );
};

export default Singlemylisting;
