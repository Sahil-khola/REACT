import { useState } from "react";

function App() {
  const [gender, setGender] = useState("male");
  function handelRadio(event) {
    setGender(event.target.value);
  }
  const [city,setCity]= useState("gurugram")
  function handelCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <h1>Handel Radio Button</h1>
      <form>
        <h3>SELECT GENDER</h3>
        <input type="radio" name="gender" id="male" value="male" onChange={handelRadio} checked={gender=="male"} />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" checked={gender=="female"} onChange={handelRadio} />
        <label htmlFor="female">Female</label>
      </form>
      <h3>Selected Gender : {gender}</h3>
      <br /><br /><hr />
      <form>
        <h3>SELECT CITY</h3>
        <select name="city" id="city" onChange={handelCity} defaultValue={""}>
          <option value="gurugram">Gurugram</option>
          <option value="delhi">delhi</option>
          <option value="noida">noida</option>
        </select>
        <h3>Selected city : {city}</h3>
      </form>
    </div>
  )
}
export default App;