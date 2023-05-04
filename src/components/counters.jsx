import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 3 },
    { id: 4, value: 1 },
  ]);

  const handleIncrement = (counter) => {
    const countersArray = [...counters]
    const index = countersArray.indexOf(counter);
    countersArray[index] = {...counter};
    countersArray[index].value++;
    setCounters(countersArray);
  }
 
  return (
    <>
      <button
        onClick={() => {setCounters(counters.map((c) => ({...c, value: 0})))  }}
        className="btn btn-primary btn-sm m-2"
      >
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          onIncrement={handleIncrement}
          onDelete={(counterId) => {
            setCounters(counters.filter((c) => c.id !== counterId));
          }}
          key={counter.id}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Counters;
