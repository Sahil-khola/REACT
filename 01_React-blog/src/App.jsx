import { useState } from "react"
import User from "./user"
function App() {
 const [Counter,setCounter] = useState(0)
  return (
   <>
   <h1>SAHIL KHOLA </h1>
   <h1>Counter Val :{Counter}</h1>
   <User />
   <button onClick={()=>setCounter(Counter+1)}>add</button>
   </>
  )
}

export default App
