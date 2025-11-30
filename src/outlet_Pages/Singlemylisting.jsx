import React from "react";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "Do you really want to delete this listing?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!"
  });

  // If user clicks "Yes"
  if (result.isConfirmed) {
    try {
      const res = await axios.delete(`http://localhost:5000/listings/${id}`);
      console.log("Deleted:", res.data);

      Swal.fire("Deleted!", "Your listing has been deleted.", "success");

      // OPTIONAL: refresh or refetch UI
      // refetch();
    } catch (error) {
      console.error("Delete error:", error);
      Swal.fire("Error", "Something went wrong while deleting.", "error");
    }
  } else {
    Swal.fire("Cancelled", "Your listing is safe!", "info");
  }
};

const Singlemylisting = ({ singlelist }) => {
  return (
    <div className="max-w-sm backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-2xl overflow-hidden my-4">
      <img
        className="w-[50%] mx-auto h-48 object-cover my-4"
        src={singlelist.image}
        alt={singlelist.name}
      />

      <div className="p-4 space-y-2 w-[50%] mx-auto">
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

        <p className="text-sm text-gray-700">{singlelist.description}</p>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Seller Email:</span>{" "}
          {singlelist.email}
        </p>

        <div className="flex items-center gap-2">
          <Link to={`/editlisting/${singlelist._id}`}>
            <button className="btn btn-soft btn-success">Edit</button>
          </Link>

          <button
            onClick={() => handleDelete(singlelist._id)}
            className="btn btn-soft btn-warning"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singlemylisting;
