import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detail }) => {
  const { agregarItem } = useContext(CartContext);
  const [comprar, setComprar] = useState(false);

  const onAdd = (cantidad) => {
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `Agregaste ${cantidad} de item: ${detail.name}`,
      confirmButtonColor: "#3085d6",
      timer: 1800,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
    agregarItem(detail, cantidad);
    setComprar(true);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-imagen">
        <img src={detail.img} alt={detail.name} />
      </div>
      <div className="item-detail-container">
        <h2>{detail.name}</h2>
        <p className="descripcion">{detail.description}</p>
        <p className="precio">$ {detail.price},00</p>
        <p className="stock-label">
          Stock disponible:{" "}
          <span className="stock-cantidad">{detail.stock}</span>
        </p>
        <div className="item-count">
          {comprar ? (
            <Link className="btn btn-danger" to="/cart">
              {" "}
              Ir al Carrito
            </Link>
          ) : (
            <ItemCount stock={detail.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
