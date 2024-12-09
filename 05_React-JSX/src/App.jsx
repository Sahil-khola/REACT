import { createElement } from "react";

function App() {
 const Name = "Sahil khola";
 let x = 10;
 let y = 40;
  return (
    <>
      <h1>JSX in React {Name}</h1>
      <h1>{12+8+10}</h1>
      <h1>{x*y}</h1>
      <button onClick={()=>{
        alert("clicked")
      }}>Click</button>
    </>
  )
// return(createElement("h1",{id : "#heading"},"Hello h1");
  // return(
  //   <>
  //   <div className="rootdiv">Hello div</div>
  //   </>
  // )
// )
}

export default App
