import React from "react";
import {useForm} from 'react-hook-form'
function App() {
 
  const handelSubmit=async(event)=>{
   event.preventDefault();
   await new Promise((resolve) => {
   setTimeout(() => {
    resolve();
    console.log('submitted');
    
   }, 2000);
   })
  }
  function Form() {
    const {pending}=useForm();
    console.log(pending);
    
    
    return(
      <>
      <form method="post" onSubmit={handelSubmit}>
      <input type="text" placeholder="Enter Name" />
      <br /><br />
      <input type="password" placeholder="Enter Password" />
      <br /><br />
      <button type="submit" disabled={pending}>Submit</button>
    </form>
      </>
    )
  }
  return(
    <>
    <h1>useForm Status</h1>
    <Form/>
    </>
  )
}
export default App;