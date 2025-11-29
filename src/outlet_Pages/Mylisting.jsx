import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authcontext/AuthContext';
import axios from 'axios';
import Singlemylisting from './Singlemylisting';

const Mylisting = () => {

    const {user}=useContext(AuthContext)
    console.log(user?.email)
    const [mylisting,setmylisting]=useState([]);
    console.log('this is listing',mylisting)

    useEffect(()=>{
    
    if(user?.email){
        axios
        .get (`http://localhost:5000/listings/user?email=${user.email}`)
        .then(res=> {
            setmylisting(res.data);
            console.log(res.data)

        })

        .catch(err=>console.error(err))
    }
    
    },[user?.email])
    return (
        <div>
           {
            mylisting.map(singlelist=><Singlemylisting singlelist={singlelist}></Singlemylisting>)
           }
        </div>
    );
};

export default Mylisting;