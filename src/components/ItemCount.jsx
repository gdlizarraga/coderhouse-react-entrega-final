import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };
  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count-container">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button className="btn btn-danger sumar-restar" onClick={restar}>
          -
        </button>
        <span className="cantidad">{count}</span>
        <button className="btn btn-success sumar-restar" onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="btn btn-primary comprar"
        disabled={stock === 0 || count === 0}
        onClick={() => onAdd(count)}
      >
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
