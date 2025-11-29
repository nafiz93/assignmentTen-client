import React from 'react';
import { useLoaderData } from 'react-router';

const Petfood = () => {
        const cards=useLoaderData();
    console.log('all cards here',cards);

    return (
        <div>
            this is the pet food page
        </div>
    );
};

export default Petfood;