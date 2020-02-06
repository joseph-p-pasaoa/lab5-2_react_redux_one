import React from "react";

const Counter = ({ 
  value,
  onIncrement,
  onDecrement,
  onIncrementEven,
  onIncrementOdd
}) => (
  <div>
    <p>value: {value}</p>
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <p>---</p>
      <button onClick={onIncrementEven}>+ (only if even)</button>
      <button onClick={onIncrementOdd}>+ (only if odd)</button>
      <button onClick={() => setTimeout(onIncrement, 1000)}>+ (with 1s delay)</button>
    </div>
  </div>
);

export default Counter;
