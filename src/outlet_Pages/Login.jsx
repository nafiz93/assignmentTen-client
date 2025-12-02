import React, {  useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { GoogleAuthProvider } from "firebase/auth";

import { Eye, EyeOff } from "lucide-react"; // 👁 import icons
import Swal from "sweetalert2"; // ✅ added SweetAlert2 import
import { AuthContext } from "../authcontext/AuthContext";
import Loading from "./Loading";

const Login = () => {
  
  const { signinWithGoogle, signin, resetPassword,loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailref = useRef();
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁 toggle state
  const provider = new GoogleAuthProvider();

  const setpassword = () => {
    const email = emailref.current.value;

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email address before resetting your password.",
        confirmButtonColor: "#FF8A00",
      });
      return;
    }

    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Email Sent!",
          text: "Check your inbox for instructions to reset your password.",
          confirmButtonColor: "#FF8A00",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Reset Failed",
          text: error.message,
          confirmButtonColor: "#FF8A00",
        });
      });
  };

  const handleGoogleSignIn = () => {
    signinWithGoogle(provider)
      .then((result) => {
        navigate(location.state || "/");
        // console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
          confirmButtonColor: "#FF8A00",
        });
      });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;

    const minLengthRegex = /^.{6,}$/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[^A-Za-z0-9]/;

    if (!minLengthRegex.test(password)) {
      seterror("Password must be at least 6 characters long");
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else if (!lowercaseRegex.test(password)) {
      seterror("Password must contain at least one lowercase letter");
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain at least one lowercase letter",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else if (!uppercaseRegex.test(password)) {
      seterror("Password must contain at least one uppercase letter");
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain at least one uppercase letter",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else if (!digitRegex.test(password)) {
      seterror("Password must contain at least one number");
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain at least one number",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else if (!specialCharRegex.test(password)) {
      seterror("Password must contain at least one special character");
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain at least one special character",
        confirmButtonColor: "#FF8A00",
      });
      return;
    } else {
      seterror("");
    }

    e.target.reset();
    signin(email, password)
      .then((result) => {
        navigate(location.state || "/");
        //console.log(result);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          confirmButtonColor: "#FF8A00",
        });
      });
  };

  return (
    <div className="w-100 mx-auto my-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Glassmorphic Login Card */}
      <div className="relative z-10 backdrop-blur-[5px] bg-black/30 border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSignin} className="space-y-5">
          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              ref={emailref}
              className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Email"
            />
          </div>

          {/* Password Field with Eye Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // 👁 toggle here
              name="password"
              className="w-full px-4 py-3 pr-10 rounded-xl bg-white/15 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // 👁 toggle button
              className="absolute right-3 top-3 text-white/70 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            <p onClick={setpassword} className="ml-2 text-white cursor-pointer">
              forget password
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF8A00] shadow-md hover:opacity-90 transition-all duration-300"
          >
            Login
          </button>

          <p className="ml-3 text-gray-400 text-center">
            ---------------------- Or ---------------------
          </p>

          {/* Sign in with Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full py-3 flex items-center justify-center gap-2 text-gray-900 font-medium bg-gray-300 rounded-xl shadow-md hover:bg-orange-500 transition-all duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          <p className="text-red-400 text-sm text-center">{error}</p>

          {/* Redirect to Register */}
          <p className="text-center text-white/90 mt-4 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold underline hover:text-yellow-200"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
