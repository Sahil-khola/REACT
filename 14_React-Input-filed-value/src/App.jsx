// import { useState } from 'react'

import { useState } from "react";


// function App() {
//   const [val, setVal] = useState("")

//   return (
//     <>
//     <h1>Get Input field Value</h1>
//     <input type="text" value={val} onChange={(event)=>{setVal(event.target.value)}} placeholder='User Name' />
//     <h1>{val}</h1>
//     <button onClick={()=>{setVal("")}}>Clear value</button>
//     </>
//   )
// }

// export default App











function App() {
  const [Name ,setName]=useState("")
  return(
    <>
    <h1 >Get Input Field Value </h1>
    <form action="" method="get">
    <input type="text" placeholder="Enter Name"  onChange={(event)=>{setName(event.target.value)}}/>
    <button onClick={()=>{
      setName("")
    }}>Clear</button>

    </form>
    <h5>{Name}</h5>
    </>
  )
}

export default App;














