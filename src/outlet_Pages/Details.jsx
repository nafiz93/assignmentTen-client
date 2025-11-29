import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const listDetails=useLoaderData();
    console.log(listDetails)
    return (
         <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {listDetails.name}
      <div className="badge badge-secondary">{listDetails.category}</div>
    </h2>
    <p> <span className='font-semibold'>Location:</span> {listDetails.location}</p>
    <p> <span className='font-semibold'>Description:</span> {listDetails.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${listDetails.price}</div>
      <div className="badge badge-outline">Order</div>
    </div>
  </div>
</div>
    );
};

export default Details;