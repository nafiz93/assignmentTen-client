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
import Pets from '../outlet_Pages/Pets';
import Petcare from '../outlet_Pages/Petcare';
import Accessories from '../outlet_Pages/Accessories';
import Petfood from '../outlet_Pages/Petfood';


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

     {
  path: "/category/Pets",
  element: <Pets />,
  loader: () =>
    fetch(`http://localhost:3000/listings/category/Pets`)
},

{
  path: "/category/Pet Food",
  element: <Petfood />,
  loader: () =>
    fetch(`http://localhost:3000/listings/category/Pet Food`)
},

{
  path: "/category/Accessories",
  element: <Accessories />,
  loader: () =>
    fetch(`http://localhost:3000/listings/category/Accessories`)
},

{
  path: "/category/Pet Care Products",
  element: <Petcare />,
  loader: () =>
    fetch(`http://localhost:3000/listings/category/Pet Care Products`)
},

    ],
  },
]);
