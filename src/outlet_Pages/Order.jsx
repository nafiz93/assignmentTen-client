import React from "react";
import Swal from "sweetalert2";

const Order = () => {
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





    
    // -------------------------
    // VALIDATION
    // -------------------------
    for (const key in orderData) {
      // notes can be empty
      if (key !== "notes" && orderData[key] === "") {
        Swal.fire({
          icon: "error",
          title: "Missing Information",
          text: `Please fill out the ${key} field.`,
        });
        return; // 🔥 stop submission
      }
    }

    // -------------------------
    // SUCCESS ALERT
    // -------------------------
    Swal.fire({
      icon: "success",
      title: "Order Submitted!",
      text: "Your order has been successfully placed.",
      timer: 2000,
      showConfirmButton: false,
    });

    console.log("Order Data:", orderData);

    // Clear form after success
    form.reset();
  };

  return (
    <div className="hero min-h-screen">
      <div className="card backdrop-blur-lg bg-white/10 border border-white/20 my-5 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">

          {/* FORM START */}
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">

              {/* Product Name */}
              <label className="label">Product Name</label>
              <input
                type="text"
                name="productName"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="Golden Retriever Puppy"
              />

              {/* Buyer Name */}
              <label className="label">Buyer Name</label>
              <input
                type="text"
                name="buyerName"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="Mr. X"
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="buyer@gmail.com"
              />

              {/* Quantity */}
              <label className="label">Quantity</label>
              <input
                type="number"
                name="quantity"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="1"
                min="1"
              />

              {/* Price */}
              <label className="label">Price (per unit)</label>
              <input
                type="number"
                name="price"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="0"
                min="0"
              />

              {/* Address */}
              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="Chattogram"
              />

              {/* Phone */}
              <label className="label">Phone</label>
              <input
                type="text"
                name="phone"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="017xxxxxxxx"
              />

              {/* Date */}
              <label className="label">Date</label>
              <input
                type="date"
                name="date"
                className="input backdrop-blur-lg bg-white/10 border border-white/20"
              />

              {/* Notes */}
              <label className="label">Additional Notes</label>
              <textarea
                name="notes"
                className="textarea backdrop-blur-lg bg-white/10 border border-white/20"
                placeholder="Any extra details..."
              ></textarea>

              <button className="btn btn-neutral mt-4">Place Order</button>
            </fieldset>
          </form>
          {/* FORM END */}

        </div>
      </div>
    </div>
  );
};

export default Order;
