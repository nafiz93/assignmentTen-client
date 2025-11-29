import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const Listing = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const listingData = {
      name: form.name.value.trim(),
      category: form.category.value.trim(),
      price: form.price.value.trim(),
      location: form.location.value.trim(),
      description: form.description.value.trim(),
      image: form.image.value.trim(),
      email: form.email.value.trim(),
      date: form.date.value.trim(),
    };

     axios.post("http://localhost:3000/listings", listingData)
    .then(res => console.log("POST:", res.data))
    .catch(err => console.error(err));




    // -------------------------
    // VALIDATION
    // -------------------------
    for (const key in listingData) {
      if (listingData[key] === "") {
        Swal.fire({
          icon: "error",
          title: "Missing Information",
          text: `Please fill out the ${key} field.`,
        });
        return; // ❌ Stop submission
      }
    }

    // -------------------------
    // SUCCESS ALERT
    // -------------------------
    Swal.fire({
      icon: "success",
      title: "Listing Submitted!",
      text: "Your listing has been successfully created.",
      timer: 2000,
      showConfirmButton: false,
    });

    console.log("Listing Data:", listingData);

    form.reset();
  };

  return (
    <div className="hero min-h-screen">
      <div className="card backdrop-blur-lg bg-white/10 border border-white/20 my-5 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">

          {/* FORM START */}
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">

              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="Listing Name"
              />

              {/* Category */}
              <label className="label">Category</label>
              <select
                name="category"
                className="select backdrop-blur-lg bg-white/10 border border-white/20"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option> Pets</option>
                <option> Pet Food</option>
                <option> Accessories</option>
                <option> Pet Care Products</option>
              </select>

              {/* Price */}
              <label className="label">Price</label>
              <input
                type="number"
                name="price"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="0"
                min="0"
              />

              {/* Location */}
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="Dhaka"
              />

              {/* Description */}
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="Write a short description..."
              ></textarea>

              {/* Image URL */}
              <label className="label">Image URL</label>
              <input
                type="text"
                name="image"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="https://example.com/image.jpg"
              />

              {/* Email */}
              <label className="label">Contact Email</label>
              <input
                type="email"
                name="email"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="owner@gmail.com"
              />

              {/* Date */}
              <label className="label">Date</label>
              <input
                type="date"
                name="date"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
              />

              <button className="btn btn-neutral mt-4">Submit Listing</button>
            </fieldset>
          </form>
          {/* FORM END */}

        </div>
      </div>
    </div>
  );
};

export default Listing;
