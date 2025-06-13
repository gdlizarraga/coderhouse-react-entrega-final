import "../App.css";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryError, setCategoryError] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setCategoryError(false);
    getProducts()
      .then((respuesta) => {
        if (categoryId) {
          const filtered = respuesta.filter(
            (prod) => prod.category === categoryId
          );
          if (filtered.length === 0) {
            setCategoryError(true);
            setData([]);
          } else {
            setData(filtered);
          }
        } else {
          setData(respuesta);
        }
      })
      .catch((error) => {
        setCategoryError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);
  return (
    <>
      {loading && (
        <div className="loading-modal">
          <span
            className="spinner-border spinner"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="loading-text"> Cargando productos...</span>
        </div>
      )}
      <div>
        {!loading && categoryError && (
          <Alert variant="danger" className="text-center">
            <Alert.Heading className="text-danger">
              Categoría no encontrada
            </Alert.Heading>
            <p>
              La categoría <b>{categoryId.toUpperCase()}</b> no existe o no
              tiene productos.
            </p>
          </Alert>
        )}
        {!loading && !categoryError && (
          <>
            <Alert variant="success">
              <Alert.Heading className="text-danger">
                <span>{props.saludo}</span>
                <span className="header-tiutlo">
                  {" "}
                  {categoryId && categoryId.toUpperCase()}
                </span>
              </Alert.Heading>
            </Alert>
            <ItemList data={data} />
          </>
        )}
      </div>
    </>
  );
};
export default ItemListContainer;
