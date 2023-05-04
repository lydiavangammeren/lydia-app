import React from "react";

const Counter = (props) => {
  //const [count, setCount] = useState(props.counter.value); 

  return (
    <div>
      <h1>Counter {props.counter.id}</h1>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => {props.onIncrement(props.counter)}}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button onClick={() => props.onDelete(props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
    </div>
  );

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  function formatCount() {
    const {value} = props.counter;
    return value === 0 ? "Zero" : value;
  }
};

export default Counter;
