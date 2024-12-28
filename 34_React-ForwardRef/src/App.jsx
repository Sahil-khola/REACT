import { useRef } from "react"
import UserInput from "./Input";

function App() {
 const inputRef = useRef();
 function updateInput(event) {
  event.preventDefault();
  inputRef.current.value="Sahil khola"
  inputRef.current.focus()
  inputRef.current.style.color='red'
 }
  return (
    <>
      <h1>Forward Ref</h1>
     <form action="" method="post">
      <UserInput inputRef={inputRef} />
     <button onClick={updateInput}>Update</button>
     </form>
    </>
  )
}

export default App
