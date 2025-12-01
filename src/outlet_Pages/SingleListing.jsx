import React from 'react';
import { Link } from 'react-router';

const SingleListing = ({ listing }) => {
  return (
    <div className="card bg-white w-96 shadow-md my-4 ml-6 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <figure className="w-full h-56 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.name}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title flex items-center justify-between">
          {listing.name}
          <div className="badge badge-secondary">{listing.category}</div>
        </h2>

        <p className="text-gray-600">{listing.location}</p>

        <div className="card-actions justify-end mt-2">
          <div className="badge badge-outline text-green-600 font-bold">
            ${listing.price}
          </div>

          <Link to={`/listdetails/${listing._id}`}>
            <div className="badge badge-outline cursor-pointer hover:bg-gray-200">
              Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
