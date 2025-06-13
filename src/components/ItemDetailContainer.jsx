import React, { useEffect, useState } from "react";
import { getOneProduct } from "../mock/AsyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOneProduct(id)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-modal">
          <span
            className="spinner-border spinner"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="loading-text"> Cargando producto...</span>
        </div>
      )}
      {!loading && (!detail || Object.keys(detail).length === 0) && (
        <Alert variant="danger" className="text-center">
          <Alert.Heading className="text-danger">
            Producto no encontrado
          </Alert.Heading>
          <p>El producto solicitado no existe o no se pudo cargar.</p>
        </Alert>
      )}
      {!loading && detail && Object.keys(detail).length > 0 && (
        <>
          <Alert variant="success">
            <Alert.Heading className="text-danger">
              <span>Detalle del Producto</span>
            </Alert.Heading>
          </Alert>
          <ItemDetail detail={detail} />
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
