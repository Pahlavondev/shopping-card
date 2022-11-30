import React from "react";

const GoodItem = (props) => {
  const { id, name, description, price, full_background, addToBasket } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img className="card-img" src={full_background} alt={name} />
      </div>

      <div className="card-content">
        <span className="card-title">{name}</span>
        <p className="card-text">{description}</p>
      </div>

      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ id, name, price })}
        >
          Buy
        </button>
        <span className="card-right">{price}$</span>
      </div>
    </div>
  );
};

export default GoodItem;
