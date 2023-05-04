import "./App.css";
import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 3 },
    { id: 4, value: 1 },
  ]);

  const handleIncrement = (counter) => {
    const countersArray = [...counters];
    const index = countersArray.indexOf(counter);
    countersArray[index] = { ...counter };
    countersArray[index].value++;
    setCounters(countersArray);
  };

  const handleDecrement = (counter) => {
    const countersArray = [...counters];
    const index = countersArray.indexOf(counter);
    countersArray[index] = { ...counter };
    if (countersArray[index].value > 0) {
      countersArray[index].value--;
    }
    setCounters(countersArray);
  };

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  const handleReset = () => {
    setCounters(counters.map((c) => ({ ...c, value: 0 })));
  };
  return (
    <>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      </main>
    </>
  );
}

export default App;
