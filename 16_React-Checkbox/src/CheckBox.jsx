import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  function handelRadio(event) {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  }
  return (
    <div>
      <form>
        <h1>SELECT SKILLS</h1>
        <input type="checkbox" name="PHP" id="php" value="php" onChange={handelRadio} />
        <label htmlFor="php">PHP</label>
        <br />
        <input type="checkbox" name="java" id="java" value="java" onChange={handelRadio} />
        <label htmlFor="java">JAVA</label>
        <br />
        <input type="checkbox" name="python" id="python" value="python" onChange={handelRadio} />
        <label htmlFor="python">PYTHON</label>
        <br />
        <h3>Selected skills : {skills.toString()}</h3>
      </form>
    </div>
  );
}
export default Skills;
