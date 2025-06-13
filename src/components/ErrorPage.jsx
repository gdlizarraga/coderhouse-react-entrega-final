import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Lo siento, esa página no existe!</h2>
      <Link to="/" className="btn btn-dark link">
        Volver a Home
      </Link>
    </div>
  );
};

export default ErrorPage;
