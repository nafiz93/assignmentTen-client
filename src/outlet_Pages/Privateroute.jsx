import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../authcontext/AuthContext';

const Privateroute = ({children}) => {
    const {user}=useContext(AuthContext)
    const location=useLocation();
//      if (loading) {
//     return <LoadingPage></LoadingPage>;
//   }

  if (user) {
    return children;
  }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
};

export default Privateroute;