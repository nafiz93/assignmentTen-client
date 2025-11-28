import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Root from '../layout/Root';
import Home from '../outlet_Pages/Home';
import Supplies from '../outlet_Pages/Supplies';
import Login from '../outlet_Pages/Login';
import Listing from '../outlet_Pages/Listing';
import Order from '../outlet_Pages/Order';
import Registration from '../outlet_Pages/Registration';


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
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
