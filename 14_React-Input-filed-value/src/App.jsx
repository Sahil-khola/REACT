import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function nameGet(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <h1>Get Input Field</h1>
        <input type="text" onChange={nameGet} placeholder="Enter your name" />
        <br />
        <br />
        <button type="reset" onClick={()=>{setName("")}}>clear</button> <br />
        {name}
      </form>
    </div>
  );
}
export default App;
