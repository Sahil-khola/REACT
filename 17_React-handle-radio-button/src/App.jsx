import { useState } from "react";

function App() {
  const [gender,setGender] = useState("");
  function handelRadio(event) {
    setGender(event.target.value)
  }
  
  const [city,setCity]=useState("Gurugram");
  function handelCity(event) {
    setCity(event.target.value)
  }

  return (
    <>
      <h1>Handel Radio and Dropdown </h1>
      <form action="" method="get">
        <h3>Select Gender</h3>
        <input type="radio" name="gender" id="male" onChange={(event)=>{event.target.value}} value={'Male'} 
        checked ={gender=='Male'}/>
        <label htmlFor="male">Male</label>
        <br />
        <br />
        <input type="radio" name="gender" id="female" onChange={handelRadio} value={'Female'}
          checked ={gender=='Female'} />
        <label htmlFor="female">Female</label>
        <h2>Selected Gender: {gender}</h2>
      </form>
      <br /><br /><br /><br />
      
        <h4>Select City</h4>
        <select defaultValue={"gurugram"}>
          <option value="noida" onChange={handelCity}>Noida</option>
          <option value="gurugram">Gurugram</option>
          <option value="delhi">Delhi</option>
        </select>
      <h1>Selected City : {city}</h1>
      
    </>
  );
}
export default App;
