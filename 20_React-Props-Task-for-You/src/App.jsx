
import { useState } from "react";
import Clock from "./Clock";
const[color,setColor]=useState('green')
function App() {
  return(
    <>
    <h1>Digital clock in React js </h1>
    <select>
      <option value={"red"}>Red</option>
      <option value={"blue"}>Blue</option>
      <option value={"green"}>Green</option>
      <option value={"orange"}>Orange</option>
    </select>
    <Clock colorr={color}/>
    </>
  )
}
export default App;