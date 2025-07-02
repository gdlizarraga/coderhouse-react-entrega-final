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
        <Alert.Heading
          className="text-danger"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span className="header-tiutlo">Detalle de tu Carrito</span>
          {cart.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "0.7rem",
                marginTop: "0.5rem",
                marginLeft: "auto",
              }}
            >
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
      <div
        style={{
          margin: "1rem auto",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "0.5rem 0.5rem",
        }}
      >
        <div style={{ width: "100%" }}>
          {/* si quieren lo pueden hacer asi tambien */}
          {/* {cart.map((compra)=><CartItem key={compra.id} compra={compra}/>)} */}
          {cart.map((compra) => (
            <div
              key={compra.id}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                borderBottom: "1px solid #e0e0e0",
                padding: "1rem 0",
              }}
            >
              <img
                src={compra.img}
                alt={compra.name}
                style={{
                  width: "7rem",
                  height: "7rem",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                }}
              />
              <span style={{ flex: "1 1 120px", fontWeight: 600 }}>
                {compra.name}
              </span>
              <span style={{ minWidth: "90px" }}>${compra.price}</span>
              <span style={{ minWidth: "60px" }}>x{compra.cantidad}</span>
              <span
                style={{
                  minWidth: "120px",
                  color: "#1976d2",
                  fontWeight: 600,
                }}
              >
                Total: $
                {(
                  Number(compra.price.toString().replace(/\./g, "")) *
                  compra.cantidad
                ).toLocaleString("es-AR")}
              </span>
              <button
                className="btn btn-danger"
                onClick={() => eliminarItem(compra.id)}
                style={{
                  minWidth: "30px",
                  minHeight: "30px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  fontSize: "0.60rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
                  transition: "background 0.2s",
                }}
                title="Eliminar producto"
              >
                X
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#222",
                  background: "#f8f9fa",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "10px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                }}
              >
                Total a pagar: ${totalAPagar()}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
              }}
            ></div>
          </>
        )}
        {/* Responsive styles */}
        <style>
          {`
          @media (max-width: 700px) {
            .header-tiutlo {
              font-size: 1.2rem !important;
            }
            div[style*="display: flex"][style*="align-items: center"] {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 1.2rem !important;
            }
            img {
              width: 100% !important;
              height: auto !important;
              margin-bottom: 0.5rem;
            }
          }
        `}
        </style>
      </div>
    </>
  );
};

export default CartView;
