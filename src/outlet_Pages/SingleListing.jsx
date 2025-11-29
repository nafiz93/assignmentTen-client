import React from 'react';
import { Link } from 'react-router';

const SingleListing = ({listing}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {listing.name}
      <div className="badge badge-secondary">{listing.category}</div>
    </h2>
    <p>{listing.location}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${listing.price}</div>
      <Link to={`/listdetails/${listing._id}`}><div className="badge badge-outline">Details</div></Link>
    </div>
  </div>
</div>
    );
};

export default SingleListing;