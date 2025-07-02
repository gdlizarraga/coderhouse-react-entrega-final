import React from "react";

const LoaderComponent = () => {
  return (
    <div className="loading-modal">
      <span
        className="spinner-border spinner"
        role="status"
        aria-hidden="true"
      ></span>
      <span className="loading-text"> Cargando producto...</span>
    </div>
  );
};

export default LoaderComponent;
