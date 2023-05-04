import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  const { counters, onReset, onIncrement, onDecrement, onDelete } = props;
  return (
    <>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          key={counter.id}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Counters;
