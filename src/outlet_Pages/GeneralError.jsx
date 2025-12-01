import React from "react";
import { Link, useRouteError } from "react-router-dom";

const GeneralError = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-red-700 via-red-500 to-rose-600 bg-clip-text text-transparent mb-2">
        Something went wrong 😢
      </h1>

      <p className="text-gray-600 mb-4">
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>

      <Link
        to="/"
        className="px-4 py-2 text-white rounded 
                   bg-gradient-to-r from-red-700 via-red-600 to-rose-700
                   hover:from-red-800 hover:via-red-700 hover:to-rose-800"
      >
        Go Home
      </Link>
    </div>
  );
};

export default GeneralError;
