import { useState } from "react";
import User from "./User";
function App() {
  const [display, setDiplay] = useState(true);
  function Toogle() {
  setDiplay(!display)
  }
  return (
    <>
    <h1>Toggle in React js</h1>
    <button onClick={Toogle}>Toogle</button>
    {
      // display?<h1>Sahil khola</h1>:null
      display?<User/> :null
    }
    </>
  );
}

export default App;
