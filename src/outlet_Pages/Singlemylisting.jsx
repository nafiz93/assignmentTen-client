import React from 'react';

const Singlemylisting = ({ singlelist }) => {
    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border">
            <img 
                className="w-full h-48 object-cover" 
                src={singlelist.image} 
                alt={singlelist.name} 
            />

            <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                    {singlelist.name}
                </h2>

                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Category:</span> {singlelist.category}
                </p>

                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Price:</span> ${singlelist.price}
                </p>

                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Location:</span> {singlelist.location}
                </p>

                <p className="text-sm text-gray-700">
                    {singlelist.description}
                </p>

                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Seller Email:</span> {singlelist.email}
                </p>
            </div>
        </div>
    );
};

export default Singlemylisting;
