import React from "react";
import "../styles/loading.css"; // optional, only if you create a CSS file

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
