import React from 'react';
import { useLoaderData } from 'react-router';

const Pets = () => {
    const cards=useLoaderData();
    console.log('all cards here',cards);
    return (
        <div>
           this is the pet page 
        </div>
    );
};

export default Pets;