import React from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
const EmpyCart = () => {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading className="text-danger alert-heading">
          <span>Carrito vacio</span>
        </Alert.Heading>
        <p>
          Usted puede ver nuestros productos <Link to="/">aqui</Link>
        </p>
      </Alert>
    </div>
  );
};

export default EmpyCart;
