import React, { useContext } from "react";
import logo from "../../assets/images/logo.jpg";
import { AuthContext } from "../../authcontext/AuthContext";
import { NavLink, useNavigate, Link } from "react-router-dom";

const Header = () => {
  const { user, logoutUser, isloggedin } = useContext(AuthContext);

  console.log(user);

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (user) {
      logoutUser()
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.log("Logout error:", error);
        });
    } else {
      navigate("/login");
    }
  };

  const link = (
    <>
      <NavLink
        className="mr-4"
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "orange" : "black",
          fontWeight: "600",
          fontSize: "15px",
        })}
      >
        Home
      </NavLink>

      <NavLink
        className="mr-4"
        to="/supplies"
        style={({ isActive }) => ({
          color: isActive ? "orange" : "black",
          fontWeight: "600",
          fontSize: "15px",
        })}
      >
        Pet and Supplies
      </NavLink>

      {user && (
        <>
          <NavLink
            className="mr-4"
            to="/listing"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
              fontWeight: "600",
              fontSize: "15px",
            })}
          >
            My listing
          </NavLink>
          <NavLink
            className="mr-4"
            to="/order"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
              fontWeight: "600",
              fontSize: "15px",
            })}
          >
            My Orders
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>

        <div className="flex items-center">
          <img className="w-15 h-15 rounded-full" src={logo} alt="Logo" />
          <Link to="/" className="btn btn-ghost text-xl">
            PawLuxe
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>

      <div className="navbar-end">
        <button
          onClick={handleNavigate}
          className="
            btn 
            text-white
            border-none 
            bg-gradient-to-r from-[#FFB800] to-[#FF8A00]
            shadow-md 
            hover:shadow-lg
            hover:opacity-90
            transition-all
            duration-300
          "
        >
          {isloggedin ? "signout" : "login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
