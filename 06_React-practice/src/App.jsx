

function App() {
  const name = 'Sahil '
  return(
   <>
   <h1>{name}</h1>
   <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_YorWFDWE7luNnwWVx-ygomn80lY8g5-AA&s" alt=" no pics " />
   <ul>
    <li>Lorem, ipsum dolor.</li>
    <li>Lorem, ipsum dolor.</li>
    <li>Lorem, ipsum dolor.</li>
   </ul>
   <button onClick={()=>{
    alert("function called")
   }}>  Click me</button>
   </>
  )
}

export default App