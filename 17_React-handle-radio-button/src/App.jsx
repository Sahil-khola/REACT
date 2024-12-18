import { useState } from "react"


function App() {
  const [gender,setGender]=useState("female");

  function change(event) {
    setGender(event.target.value)
  }

  return (
    <>
    <h1>Handle Radio and DropDown</h1>
    <h4>Select gender</h4>
     <label htmlFor="male">Male</label>
     <input type="radio" name="gender" id="male" onChange={change} value={"male"} />
     <br /> <br />

     <label htmlFor="female">Female</label>
     <input type="radio" name="gender" id="female" onChange={change} value={"female"} />
     <br /><br />
     <h1>Select Gender : {gender}</h1>
    </>
  )
}

export default App
