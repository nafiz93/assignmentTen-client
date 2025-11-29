import React, { } from 'react';
import { useLoaderData } from 'react-router';

const Petcare = () => {
    const cards=useLoaderData();
    console.log('all cards here',cards);
    return (
        <div>
            this is the pet care page
        </div>
    );
};

export default Petcare;