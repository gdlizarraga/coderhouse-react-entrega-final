import React from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
const EmpyCart = () => {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading className="text-danger">
          <span></span>
          <span className="header-tiutlo">Carrito vacio</span>
          <h4>
            Usted puede ver nuestros productos <Link to="/">aqui</Link>
          </h4>
        </Alert.Heading>
      </Alert>
    </div>
  );
};

export default EmpyCart;
