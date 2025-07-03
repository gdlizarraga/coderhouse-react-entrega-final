import React, { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import LoaderComponent from "./LoaderComponent";
import Swal from "sweetalert2";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "products");
    const docRef = doc(productsCollection, id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() });
        } else {
          setDetail({});
          setInvalid(true);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Cargando Productos",
          text: `Error al cargar los productos. ${error}`,
          confirmButtonColor: "#3085d6",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });

        setInvalid(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading && <LoaderComponent />}
      {!loading && (invalid || Object.keys(detail).length === 0) && (
        <Alert variant="danger">
          <Alert.Heading className="text-danger">
            <span>Producto no encontrado</span>
          </Alert.Heading>
          <p>El producto solicitado no existe o no se pudo cargar.</p>
        </Alert>
      )}
      {!loading && !invalid && Object.keys(detail).length > 0 && (
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
