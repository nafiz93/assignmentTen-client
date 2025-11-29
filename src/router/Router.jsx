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
import Myorder from '../outlet_Pages/Myorder';
import Mylisting from '../outlet_Pages/Mylisting';


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root></Root>
    ),

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
        element: <Myorder></Myorder>
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
         fetch(`http://localhost:3000/listings/${params.id}`)
      },
    ],
  },
]);
