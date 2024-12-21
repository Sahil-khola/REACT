import { useState } from "react"
import Counter from "./Counter";


function App() {
 const [count, setCount] = useState(0);
 const [data, setData] = useState(0);
 const[display, setDisplay] = useState(false);
  return (
    <>
      <h1>React Lifecycle</h1>
      {
        display?<Counter count={count} data={data}/>:null
      }
      <button onClick={()=>{setCount(count+1)}}>Counter</button>
      <button onClick={()=>{setData(data+1)}}>Data</button>
      <button onClick={()=>{setDisplay(!display)}}>toogle</button>
    </>
  )
}

export default App
