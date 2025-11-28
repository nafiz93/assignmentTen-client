import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Root from '../layout/Root';
import Home from '../outlet_Pages/Home';


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
        path: "/login",
        element: <div>Login Page</div>,
      },
      {
        path: "/register",
        element: <div>Registration</div>,
      },
    ],
  },
]);
