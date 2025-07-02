import "../App.css";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
//import { getProducts, productos } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setCategoryError(false);
    const productsCollection = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        if (list.length === 0) {
          setCategoryError(true);
          setData([]);
        } else {
          setCategoryError(false);
          setData(list);
        }
      })
      .catch((error) => {
        setCategoryError(true);
      })
      .finally(() => {
        setLoading(false);
      });
    // if (categoryId) {
    //   const filtered = res.docs.filter(
    //     (prod) => prod.data().category === categoryId
    //   );
    //   if (filtered.length === 0) {
    //     setCategoryError(true);
    //     setData([]);
    //   } else {
    //     setData(filtered.map((doc) => ({ id: doc.id, ...doc.data() })));
    //   }
    // } else {
    //   setData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    // }
    // setLoading(false);
  }, [categoryId]);

  // useEffect(() => {
  //   setLoading(true);
  //   setCategoryError(false);
  //   getProducts()
  //     .then((respuesta) => {
  //       if (categoryId) {
  //         const filtered = respuesta.filter(
  //           (prod) => prod.category === categoryId
  //         );
  //         if (filtered.length === 0) {
  //           setCategoryError(true);
  //           setData([]);
  //         } else {
  //           setData(filtered);
  //         }
  //       } else {
  //         setData(respuesta);
  //       }
  //     })
  //     .catch((error) => {
  //       setCategoryError(true);
  //       console.log(error);
  //     })
  //     .finally(() => setLoading(false));
  // }, [categoryId]);

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
              La categoría{" "}
              <b>{categoryId && <span>{categoryId.toUpperCase()}</span>}</b> no
              existe o no tiene productos.
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
