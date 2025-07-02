import React, { useContext, useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalAPagar, limpiar } = useContext(CartContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  // Verificar si el carrito está vacío y redirigir al home
  useEffect(() => {
    if (cart.length === 0 && !orderId) {
      navigate("/");
    }
  }, [cart, navigate, orderId]);

  const finalizarCompra = (dataFormulario) => {
    let order = {
      comprador: {
        name: dataFormulario.name, // nombre del comprador
        address: dataFormulario.direccion, // dirección del comprador
        email: dataFormulario.email, // email del comprador
      }, // datos del comprador
      compras: cart,
      total: totalAPagar(), // total de la compra
      date: new Date().toLocaleDateString(), // fecha de la compra puede ser serverTimestamp()
    };
    const ventas = collection(db, "orders");
    // Agregar la lógica para guardar la orden en Firestore
    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        limpiar(); // Limpiar el carrito después de la compra
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Generando Orden de Compra",
          text: `Error al guardar la orden. ${error}`,
          confirmButtonColor: "#3085d6",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        })
      );
  };

  // Si el carrito está vacío, no renderizar nada (se va a redirigir al home)
  if (cart.length === 0 && !orderId) {
    return null;
  }

  return (
    <>
      {orderId ? (
        <Alert variant="success" className="text-center">
          <Alert.Heading className="text-danger">
            ¡Gracias por su compra!
          </Alert.Heading>
          <p>
            Su orden ha sido procesada con éxito. Su número de orden es:{" "}
            <strong>{orderId}</strong>.
          </p>
        </Alert>
      ) : (
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
              <span className="header-tiutlo">Complete con sus Datos</span>
            </Alert.Heading>
          </Alert>
          <div
            style={{
              maxWidth: "600px",
              margin: "2rem auto",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              padding: "2rem",
            }}
          >
            <form onSubmit={handleSubmit(finalizarCompra)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre completo"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "2px solid #dee2e6",
                  }}
                  {...register("name", {
                    required: true, // Custom error message
                    minLength: 2,
                  })}
                />
                {errors?.name?.type === "required" && (
                  <span className="text-danger">
                    Este campo es obligatorio.
                  </span>
                )}
                {errors?.name?.type === "minLength" && (
                  <span className="text-danger">
                    Este campo debe tener al menos 2 caracteres como mínimo.
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="direccion"
                  className="form-label"
                  style={{
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  name="direccion"
                  placeholder="Ingrese su dirección"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "2px solid #dee2e6",
                  }}
                  {...register("direccion", {
                    required: true, // Custom error message
                    minLength: 5,
                    maxLength: 60,
                  })}
                />
                {errors?.direccion?.type === "required" && (
                  <span className="text-danger">
                    Este campo es obligatorio.
                  </span>
                )}
                {errors?.direccion?.type === "minLength" && (
                  <span className="text-danger">
                    Este campo debe tener al menos 10 caracteres como mínimo.
                  </span>
                )}
                {errors?.direccion?.type === "maxLength" && (
                  <span className="text-danger">
                    Este campo debe tener como máximo 60 caracteres.
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Ingrese su correo electrónico"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "2px solid #dee2e6",
                  }}
                  {...register("email", {
                    required: true, // Custom error message
                  })}
                />
                {errors?.email?.type === "required" && (
                  <span className="text-danger">
                    Este campo es obligatorio.
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="emailConfirm"
                  className="form-label"
                  style={{
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Repita Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailConfirm"
                  name="emailConfirm"
                  placeholder="Repita su correo electrónico"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "2px solid #dee2e6",
                  }}
                  {...register("emailConfirm", {
                    required: true, // Custom error message
                    validate: {
                      equalsMails: (mail2) => mail2 === getValues().email,
                    },
                  })}
                />
                {errors?.emailConfirm?.type === "required" && (
                  <span className="text-danger">
                    Este campo es obligatorio.
                  </span>
                )}
                {errors?.emailConfirm?.type === "equalsMails" && (
                  <span className="text-danger">
                    Los mails deben coincidir.
                  </span>
                )}
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{
                    padding: "0.75rem 2rem",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  Finalizar Compra
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Checkout;
