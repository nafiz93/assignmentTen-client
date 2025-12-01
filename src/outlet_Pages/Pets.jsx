import React from 'react';
import { useLoaderData } from 'react-router';
import Petcard from './Petcard';
import bg from '../assets/images/pet food two.jpg';

const Pets = () => {
  const cards = useLoaderData();
  console.log('all cards here', cards);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="grid grid-cols-3 gap-5 bg-white/10 p-5 rounded-xl backdrop-blur-sm">
        {
          cards.map(card => (
            <Petcard key={card._id} card={card} />
          ))
        }
      </div>
    </div>
  );
};

export default Pets;
