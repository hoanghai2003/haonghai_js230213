import React, { useState } from "react";

export default function SpendMoney(props) {
  const { image, name, price } = props;

  const [count, setCount] = useState(0);

  const handleInterest = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <img src={image} className="img" alt="load" />

          <div className="list">
            <h4>{name} </h4>
            <p> {price} $ </p>
          </div>

          <div className="foodter">
            <button className="buttonProduct" onClick={handleInterest}>
              {" "}
              Interest{" "}
            </button>
            <span> {count} </span>
            <button className="buttonProduct" onClick={handleAdd}>
              {" "}
              add{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
