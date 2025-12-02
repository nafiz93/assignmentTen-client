import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authcontext/AuthContext';
import axios from 'axios';
import Singlemylisting from './Singlemylisting';
import Loading from './Loading';

const Mylisting = () => {
  const { user } = useContext(AuthContext);
  const [mylisting, setMylisting] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/listings/user?email=${user.email}`)
        .then((res) => setMylisting(res.data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  


  return (
    <div>
      {mylisting.map((singlelist) => (
        <Singlemylisting key={singlelist._id} singlelist={singlelist} />
      ))}
    </div>
  );
};

export default Mylisting;
