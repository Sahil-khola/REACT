import { useState } from 'react'


function App() {
  const [val, setVal] = useState("")

  return (
    <>
    <h1>Get Input field Value</h1>
    <input type="text" value={val} onChange={()=>{setVal(event.target.value)}} placeholder='User Name' />
    <h1>{val}</h1>
    <button onClick={()=>{setVal("")}}>Clear value</button>
    </>
  )
}

export default App
