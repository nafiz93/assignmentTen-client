import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";  
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../authcontext/AuthContext";

const Registration = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    const name = e.target.name.value;

    const minLengthRegex = /^.{6,}$/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[^A-Za-z0-9]/;

    if (!minLengthRegex.test(password)) {
      seterror("Password must be at least 6 characters long");
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters long.",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else if (!lowercaseRegex.test(password)) {
      seterror("Password must contain at least one lowercase letter");
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one lowercase letter.",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else if (!uppercaseRegex.test(password)) {
      seterror("Password must contain at least one uppercase letter");
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one uppercase letter.",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else if (!digitRegex.test(password)) {
      seterror("Password must contain at least one number");
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one number.",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else if (!specialCharRegex.test(password)) {
      seterror("Password must contain at least one special character");
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one special character.",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else {
      seterror("");
    }

    e.target.reset();
    registerUser(email, password)
      .then((result) => {
        updateUserProfile(name, "");
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Your account has been created successfully.",
          confirmButtonColor: "#FF8A00",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          confirmButtonColor: "#FF8A00",
        });
      });
  };

  return (
    <div className="w-100 my-4 mx-auto">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 backdrop-blur-[5px] bg-black/30 border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Name"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Email"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full px-4 py-3 pr-10 rounded-xl bg-white/15 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-white/70 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF8A00] shadow-md hover:opacity-90 transition-all duration-300"
          >
            Sign Up
          </button>

          <p className="text-red-400 text-sm text-center">{error}</p>

          <p className="text-center text-white/90 mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold underline hover:text-yellow-200"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
