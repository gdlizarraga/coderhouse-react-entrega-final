import { PiShoppingCartLight } from "react-icons/pi";
import { Badge } from "react-bootstrap";
const CartWidgetIcons = () => {
  return (
    <div>
      <PiShoppingCartLight fontSize={"1.3rem"} color="white" />
      <Badge bg="danger">{0}</Badge>
    </div>
  );
};

export default CartWidgetIcons;
