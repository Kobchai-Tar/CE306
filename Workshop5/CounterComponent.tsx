import React, { useState } from "react";
import "./CounterComponent.css";

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  const plus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const remove = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Counter Exercise - Solution</h2>
      <h2 className="counter-value">{count}</h2>
      <button className="btn-plus" onClick={plus}>+ เพิ่ม</button>
      <button className="btn-minus" onClick={remove}>- ลด</button>
      <button className="btn-reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;