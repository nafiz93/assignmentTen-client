import React, { useContext } from 'react';
import logo from '../../assets/images/logo.jpg'
import { AuthContext } from '../../authcontext/AuthContext';

const Header = () => {

  const {user}=useContext(AuthContext);
  console.log(user)

  const link=<><li className='font-semibold'><a>Home</a></li>
      <li className='font-semibold'><a>Pets & Supplies</a></li></>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {link}
       {
        user && (
    <>
      <li><a>Add Listing</a></li>
      <li><a>My Listings</a></li>
      <li><a>My Orders</a></li>
    </>
  )
       }
      </ul>
    </div>

   <div className='flex items-center justify-center'>
    <img className='w-20 h-20 rounded-full object-cover' src={logo} alt="" />
     <a className="btn btn-ghost text-xl">PawLuxe</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default Header;