import React from 'react';
import { useLoaderData } from 'react-router';

const Accessories = () => {
    const cards=useLoaderData();
    console.log('all cards here',cards);
    return (
        <div>
            this is the accessories page
        </div>
    );
};

export default Accessories;