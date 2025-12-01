import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SingleListing from './SingleListing';
import bg from '../assets/images/pet-food.jpg';

const Supplies = () => {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/listings")
      .then(res => setListings(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="grid grid-cols-3 gap-5 bg-white/70 p-5 rounded-xl backdrop-blur-sm">
        {
          listings.map(listing => (
            <SingleListing key={listing._id} listing={listing} />
          ))
        }
      </div>
    </div>
  );
};

export default Supplies;
