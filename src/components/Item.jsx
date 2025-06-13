import React from "react";
import { Link } from "react-router-dom";
const Item = ({ prod }) => {
  const { name, price, img, id } = prod;
  return (
    <div className="card item">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body card-item-body">
        <h5 className="card-title">{name}</h5>
        <div className="precio">
          <p className="card-text">${price},00</p>
        </div>
        <div className="link">
          <Link to={`/item/${id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
