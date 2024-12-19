import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function changeValue(event) {
    setName(event.target.value)
  }
  return (
    <>
      <h1>handel input field</h1>
      <form action="" method="get">
        <input type="text" name="" id="" onChange={changeValue} placeholder="Enter Name" />
      <br />
      <br />
      <button>clear</button>
      </form>
      <h3>Name :- {name}</h3>
    </>
  );
}
export default App;
