import React from "react";

const Counter = (props) => {
  const { counter, onDelete, onCalculation} = props;
  return (
    <div>
      <h1>Counter {counter.id}</h1>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => {
          onCalculation(counter, "plus");
        }}
        className="btn btn-dark btn-sm m-1"
      >
        Increment
      </button>
      <button
        onClick={() => {
          onCalculation(counter, "min");
        }}
        className="btn btn-secondary btn-sm m-1"
      >
        Decrement
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  function formatCount() {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
};

export default Counter;
