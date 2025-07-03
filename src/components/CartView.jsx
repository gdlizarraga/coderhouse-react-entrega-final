import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, limpiar, eliminarItem, totalAPagar } = useContext(CartContext);
  const confirmarVaciarCarrito = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará todos los productos del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, vaciar carrito",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        limpiar();
        Swal.fire(
          "¡Carrito vacio!",
          "Todos los productos han sido eliminados.",
          "success"
        );
      }
    });
  };

  return (
    <>
      <Alert variant="success">
        <Alert.Heading className="text-danger alert-heading">
          <span className="header-tiutlo">Detalle de tu Carrito</span>
          {cart.length > 0 && (
            <div className="alert-actions">
              <button
                className="btn btn-danger"
                onClick={confirmarVaciarCarrito}
              >
                Vaciar carrito
              </button>
              <Link className="btn btn-success" to="/checkout">
                Terminar Compra
              </Link>
            </div>
          )}
        </Alert.Heading>
      </Alert>
      <div className="cart-view-container">
        <div style={{ width: "100%" }}>
          {cart.map((compra) => (
            <div className="cart-view-item" key={compra.id}>
              <img
                className="cart-view-item-image"
                src={compra.img}
                alt={compra.name}
              />
              <span style={{ flex: "1 1 120px", fontWeight: 600 }}>
                {compra.name}
              </span>
              <span style={{ minWidth: "90px" }}>${compra.price}</span>
              <span style={{ minWidth: "60px" }}>x{compra.cantidad}</span>
              <span className="cart-view-item-total">
                Total: $
                {(
                  Number(compra.price.toString().replace(/\./g, "")) *
                  compra.cantidad
                ).toLocaleString("es-AR")}
              </span>
              <button
                className="btn btn-danger cart-view-item-remove"
                onClick={() => eliminarItem(compra.id)}
                title="Eliminar producto"
              >
                X
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <>
            <div className="cart-view-total">
              <span className="cart-view-total-label">
                Total a pagar: ${totalAPagar()}
              </span>
            </div>
            <div className="cart-view-actions"></div>
          </>
        )}
      </div>
    </>
  );
};

export default CartView;
