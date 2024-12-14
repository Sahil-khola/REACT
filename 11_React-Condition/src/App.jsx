import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function increase() {
    setCount(count+1)
  }
  return (
    <>
   <h1>Multiple condition in React js</h1>
   <h1>{count}</h1>
    <button onClick={increase}>Counter</button>
   {
    count==0?<h1>condition 0</h1>
    :count==1?<h1>condition 1</h1>
    :count==2?<h1>condition 2</h1>
    :count==3?<h1>condition 3</h1>
    :count==4?<h1>condition 4</h1>
    :<h1>other condition</h1>
    
   }
   </>
  )
}

export default App
