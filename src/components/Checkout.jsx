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
        <Alert variant="success">
          <Alert.Heading className="text-danger alert-heading">
            <span className="header-tiutlo">¡Gracias por su compra!</span>
          </Alert.Heading>
          <p>
            Su orden ha sido procesada con éxito. Su número de orden es:{" "}
            <strong>{orderId}</strong>.
          </p>
        </Alert>
      ) : (
        <>
          <Alert variant="success">
            <Alert.Heading className="text-danger alert-heading">
              <span className="header-tiutlo">Complete con sus Datos</span>
            </Alert.Heading>
          </Alert>
          <div className="checkout-view-container">
            <form onSubmit={handleSubmit(finalizarCompra)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="form-label checkout-view-label"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control checkout-view-input"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre completo"
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
                  className="form-label checkout-view-label"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control checkout-view-input"
                  id="direccion"
                  name="direccion"
                  placeholder="Ingrese su dirección"
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
                  className="form-label checkout-view-label"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control checkout-view-input"
                  id="email"
                  name="email"
                  placeholder="Ingrese su correo electrónico"
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
                  className="form-label checkout-view-label"
                >
                  Repita Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control checkout-view-input"
                  id="emailConfirm"
                  name="emailConfirm"
                  placeholder="Repita su correo electrónico"
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

              <div className="checkout-view-actions">
                <button
                  className="btn btn-success checkout-view-button"
                  type="submit"
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
