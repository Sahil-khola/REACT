

function App() {
 function myFun() {
  alert("working")
 }

 const fruit = (name)=>{
  alert(name)
 }
  return (
    <>
    <h1>Click Function and Function call</h1>
    <button onClick={myFun}> click me</button>
    <button onClick={()=>fruit("apple")}>Apple</button>
    </>
  )
}

export default App
