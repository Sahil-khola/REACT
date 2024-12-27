import { useRef } from "react"


function App() {

 const inputRef = useRef(null)
 const h1Ref = useRef(null)
 function inputHandel() {
  console.log(inputRef);
  inputRef.current.focus()
  inputRef.current.style.color='red'
  inputRef.current.placeholder='Enter Password'
  inputRef.current.placeholder='123'
 }

 function toogleHandel() {

  if (inputRef.current.style.display!='none') {
      inputRef.current.style.display='none'
  }else{
      inputRef.current.style.display='inline'
  }
 }
 function h1Handel() {
  h1Ref.current.style.color="green"
 }
  return (
    <>
    <h1>useRef Hook in React</h1>
    <button onClick={toogleHandel}>Toggle</button>
    <input type="text" ref={inputRef} placeholder="Enter Name" />
    <button onClick={inputHandel}> Focus </button>
    <h1 ref={h1Ref}> hello</h1>
    <button  onClick={h1Handel} >chnge</button>
    </>
  )
}

export default App
