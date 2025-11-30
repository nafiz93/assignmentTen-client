import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Editmylisting = () => {
    const listdetails = useLoaderData();
    const id=listdetails._id;

    

const handleUpdate = async (id, updatedInfo) => {
  try {
    const res = 
    
    await axios
    
    .patch(
      `http://localhost:5000/listings/${id}`,
      updatedInfo
    );
    console.log("Updated:", res.data);
    const modifiedCount=res.data.modifiedCount;
    if(modifiedCount){
        alert('list updated')
    }
  } catch (err) {
    console.error(err);
  }
};


    // Controlled state inputs
    const [name, setName] = useState(listdetails?.name || "");
    const [category, setCategory] = useState(listdetails?.category || "");
    const [price, setPrice] = useState(listdetails?.price || "");
    const [location, setLocation] = useState(listdetails?.location || "");
    const [description, setDescription] = useState(listdetails?.description || "");
    const [image, setImage] = useState(listdetails?.image || "");
    const [email] = useState(listdetails?.email || "");
    const [date, setDate] = useState(listdetails?.date || "");

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl my-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Edit Listing</h2>

            <form className="grid grid-cols-1 gap-4">

                {/* Name */}
                <div>
                    <label className="font-medium">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter name"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="font-medium">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="">Select category</option>
                        <option value="Pets">Pets</option>
                        <option value="Pet Food">Pet Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Pet Care Products">Pet Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="font-medium">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter price"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="font-medium">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter location"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="font-medium">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded-lg h-24"
                        placeholder="Write description..."
                    ></textarea>
                </div>

                {/* Image */}
                <div>
                    <label className="font-medium">Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter image URL"
                    />
                </div>

                {/* Email (read only) */}
                <div>
                    <label className="font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        readOnly
                        className="w-full p-2 border rounded-lg bg-gray-100"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="font-medium">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

              
            </form>
             <button
  onClick={() =>
    handleUpdate(id, {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
    })
  }
  className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-900"
>
  Update Listing
</button>

        </div>
    );
};

export default Editmylisting;
