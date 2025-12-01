import React from 'react';
import { useLoaderData } from 'react-router';
import Petfoodcard from './Petfoodcard';
import bg from '../assets/images/pet-food.jpg';

const Petfood = () => {
  const cards = useLoaderData();
  console.log("all cards here", cards);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="grid grid-cols-3 gap-5 bg-white/70 p-5 rounded-xl backdrop-blur-sm">
        {
          cards.map(item => (
            <Petfoodcard key={item._id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Petfood;
