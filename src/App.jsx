import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBarBootstrap from "./components/NavBarBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Indicaciones from "./components/Indicaciones";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarBootstrap />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer saludo="Listado Completo de Productos" />
            }
          />
          <Route
            path="/categoria/:categoryId"
            element={<ItemListContainer saludo="Estas en la categoría:" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/indicaciones" element={<Indicaciones />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
