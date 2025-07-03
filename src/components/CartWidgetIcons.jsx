import { PiShoppingCartLight } from "react-icons/pi";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const CartWidgetIcons = () => {
  const { cart, cantidadTotal } = useContext(CartContext);
  return (
    <div>
      {cart.length > 0 ? (
        <Link
          to="/cart"
          className="cart-widget-icons"
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
            e.target.style.transform = "scale(1)";
          }}
        >
          <PiShoppingCartLight fontSize={"1.3rem"} color="white" />
          <Badge bg="danger">{cantidadTotal()}</Badge>
        </Link>
      ) : (
        <>
          <PiShoppingCartLight fontSize={"1.3rem"} color="white" />
          <Badge bg="danger">{cantidadTotal()}</Badge>
        </>
      )}
    </div>
  );
};
export default CartWidgetIcons;
