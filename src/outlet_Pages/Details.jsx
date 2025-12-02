import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Details = () => {
  const listDetails = useLoaderData();

  const openModal = () => {
    document.getElementById("order_modal").checked = true;
  };

  const closeModal = () => {
    document.getElementById("order_modal").checked = false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const orderData = {
      productName: form.productName.value.trim(),
      buyerName: form.buyerName.value.trim(),
      email: form.email.value.trim(),
      quantity: form.quantity.value.trim(),
      price: form.price.value.trim(),
      address: form.address.value.trim(),
      phone: form.phone.value.trim(),
      date: form.date.value.trim(),
      notes: form.notes.value.trim(),
    };

    // Validation
    for (const key in orderData) {
      if (key !== "notes" && orderData[key] === "") {
        Swal.fire({
          icon: "error",
          title: "Missing Information",
          text: `Please fill out the ${key} field.`,
        });
        return;
      }
    }

    // Success popup
    Swal.fire({
      icon: "success",
      title: "Order Submitted!",
      text: "Your order has been successfully placed.",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      closeModal();
    });

    axios
      .post("http://localhost:5000/orders", orderData)
      .then((res) => console.log("ORDER ADDED:", res.data))
      .catch((err) => console.error(err));

    form.reset();
  };

 return (
  <div className="min-h-screen flex items-center justify-center 
                  bg-white/5 
                  px-4">

    <div className="card w-[480px] bg-white/60 backdrop-blur-lg 
                    shadow-2xl rounded-2xl border border-white/30 
                    p-2">
      <figure>
        <img 
          src={listDetails.image} 
          alt={listDetails.name} 
          className="w-full h-72 object-cover rounded-xl"
        />
      </figure>

      <div className="card-body text-lg">
        <h2 className="card-title text-2xl font-bold">
          {listDetails.name}
          <div className="badge bg-rose-500 text-white border-none px-3 py-2">
            {listDetails.category}
          </div>
        </h2>

        <p>
          <span className="font-semibold">Location:</span> {listDetails.location}
        </p>

        <p>
          <span className="font-semibold">Description:</span> {listDetails.description}
        </p>

        <div className="card-actions justify-between mt-6">
          <div className="badge bg-gradient-to-r from-red-700 to-rose-600 
                          text-white text-lg px-4 py-3 border-none shadow-md">
            ${listDetails.price}
          </div>

          <div
            onClick={openModal}
            className="badge cursor-pointer bg-white/70 text-rose-600 border border-rose-300 
                       hover:bg-rose-600 hover:text-white transition px-4 py-3 shadow"
          >
            Order
          </div>
        </div>
      </div>
    </div>

    {/* Modal */}
    <input type="checkbox" id="order_modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box max-w-lg">
        <h3 className="font-bold text-lg mb-4">Place Order</h3>

        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset space-y-2">
            <label className="label">Product Name</label>
            <input type="text" name="productName" className="input" />

            <label className="label">Buyer Name</label>
            <input type="text" name="buyerName" className="input" />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" />

            <label className="label">Quantity</label>
            <input type="number" name="quantity" className="input" min="1" />

            <label className="label">Price</label>
            <input type="number" name="price" className="input" min="0" />

            <label className="label">Address</label>
            <input type="text" name="address" className="input" />

            <label className="label">Phone</label>
            <input type="text" name="phone" className="input" />

            <label className="label">Date</label>
            <input type="date" name="date" className="input" />

            <label className="label">Notes</label>
            <textarea name="notes" className="textarea"></textarea>

            <button className="btn bg-gradient-to-r from-red-700 to-rose-600 text-white mt-4 w-full">
              Place Order
            </button>
          </fieldset>
        </form>

        <div className="modal-action">
          <label htmlFor="order_modal" className="btn">Close</label>
        </div>
      </div>
    </div>
  </div>
);



};

export default Details;
