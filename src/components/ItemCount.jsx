import React, { useState } from "react";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="counter">
        <button
          onClick={() => {
            counter !== 0 ? setCounter(counter - 1) : setCounter(counter);
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={() => {
            counter !== stock ? setCounter(counter + 1) : setCounter(counter);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;