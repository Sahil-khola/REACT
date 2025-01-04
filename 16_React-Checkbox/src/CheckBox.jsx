import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  function handelSkill(event) {
    if(event.target.checked){
      setSkills([...skills, event.target.value]);
    }else{
      setSkills([skills.filter((item) => item !== event.target.value)]);
    }

  }
  return (
    <div>
      <h3>Select Your Skills</h3>
      <form>
        <input type="checkbox" id="php" name="php" value="php"  onChange={handelSkill}/>
        <label htmlFor="php">PHP</label>
        <br />
        <br />
        <input type="checkbox" id="js" name="js" value="js" onChange={handelSkill} />
        <label htmlFor="js">JS</label>
        <br />
        <br />
        <input type="checkbox" id="java" name="java" value="java" onChange={handelSkill} />
        <label htmlFor="java">JAVA</label>
        <br />
        <br />
        <input type="checkbox" id="python" name="python" value="python"onChange={handelSkill} />
        <label htmlFor="python">PYTHON</label>
        <br />
        <br />
        <h1>{skills.toString()}</h1>
      </form>
    </div>
  );
}
export default Skills;
