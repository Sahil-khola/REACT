import { useState } from "react";

function App() {
  const [gender, setGender] = useState("Female");
  function chnageRadio(event) {
    setGender(event.target.value);
  }


  const [city, setCity] = useState("gurugram");
  function chnageCity(event){
    setCity(event.target.value);
  }
  return (
    <div>
      <h1>Handel Radio and Dropdown</h1>
      <h3> Select Gender</h3>
      <input type="radio" name="Gender" id="Male"  value='Male'checked={gender=='Male'} onChange={chnageRadio}/>
      <label htmlFor="Male">MALE</label>
      <input type="radio" name="Gender" id="Female" value='female' checked={gender=='female'} onChange={chnageRadio} />
      <label htmlFor="Female">FEMALE</label>
      <h4>Selected Gender:{gender}</h4>
      <br /><br /><br />
     <hr />
     <hr />
      <h1>Select city</h1>
      <select name="City" defaultValue={"gurugram"} onChange={chnageCity}>
        <option value="noida" >Noida</option>
        <option value="gurugram">GURUGRAM</option>
        <option value="delhi">DELHI</option>
      </select>
      <h3>selected city :{city}</h3>
    </div>
  );
}
export default App;
