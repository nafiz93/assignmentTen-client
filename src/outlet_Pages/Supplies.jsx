import axios from 'axios';
import React, { useState } from 'react';
import SingleListing from './SingleListing';

const Supplies = () => {

    const [listings,setlistings]=useState([]);

    axios.get("http://localhost:5000/listings")
    .then(res => setlistings( res.data))
    .catch(err => console.error(err));

    
    return (
      <>
      {
listings.map(listing=><SingleListing key={listing._id} listing={listing}></SingleListing>)
      }
      </>
    );
};

export default Supplies;