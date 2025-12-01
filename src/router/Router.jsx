import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Root from '../layout/Root';
import Home from '../outlet_Pages/Home';
import Supplies from '../outlet_Pages/Supplies';
import Login from '../outlet_Pages/Login';
import Listing from '../outlet_Pages/Listing';
import Registration from '../outlet_Pages/Registration';
import Details from '../outlet_Pages/Details';
import Privateroute from '../outlet_Pages/Privateroute';
import Mylisting from '../outlet_Pages/Mylisting';
import Pets from '../outlet_Pages/Pets';
import Petcare from '../outlet_Pages/Petcare';
import Accessories from '../outlet_Pages/Accessories';
import Petfood from '../outlet_Pages/Petfood';
import MyOrders from '../outlet_Pages/MyOrders';
import Editmylisting from '../outlet_Pages/Editmylisting';
import GeneralError from '../outlet_Pages/GeneralError';



export const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    errorElement:<GeneralError></GeneralError>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/supplies",
        element: <Supplies></Supplies>,
      },
      {
        path: "/listing",
        element: <Listing></Listing>,
      },
      {
        path: "/myorder",
        element: <MyOrders></MyOrders>
      },
      {
        path: "/mylist",
        element: <Mylisting></Mylisting>
      },

     
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
     
      {
        path: "/listdetails/:id",
        element:<Privateroute><Details></Details></Privateroute>,
         loader: ({ params }) =>
         fetch(`http://localhost:5000/listings/${params.id}`)
      },
      {
        path: "/editlisting/:id",
        element:<Privateroute><Editmylisting></Editmylisting></Privateroute>,
         loader: ({ params }) =>
         fetch(`http://localhost:5000/listings/${params.id}`)
      },

     {
  path: "/category/:categoryname",
  element: <Pets />,
  loader: ({params}) =>
    fetch(`http://localhost:5000/listings/category/${params.categoryname}`)
},


    ],
  },
]);
