import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [fruit, setFruit] = useState("Apple");
  function changeFruit() {
    setFruit("banana")
    setFruit("orange")
  }
  return (
    <>
      <h1>State in React js </h1>
      <h1>{fruit}</h1>
      <button onClick={changeFruit}>Chnge fruit name </button>
      < Counter />
    </>
  );
}

export default App;
