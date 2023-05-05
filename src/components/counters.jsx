import React from "react";
import Counter from "./counter";

const Counters = (props) => {

  const {counters, onReset, onCalculation, onDelete} = props;
  return (
    <>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          onCalculation={onCalculation}
          onDelete={onDelete}
          key={counter.id}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Counters;
