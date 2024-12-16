import { useState } from "react";

function Skills() {
    const[skill,setSkill]=useState("")
    const handelSkills=(event)=>{
       setSkill(event.target.value,event.target.checked)
       if(event.target.checked){
          setSkill([...Skill,event.target.value])
       }else{
        setSkill([skill.fil])
       }

    }
    return(
        <>
        <h3>Select your Skill</h3>
        <input type="checkbox" id="php" onChange={handelSkills} value="php" />
        <label htmlFor="php">PHP</label>
        <br />
        <br />
        <input type="checkbox" id="java"onChange={handelSkills}  value="java" />
        <label htmlFor="java">JAVA</label>
        <br />
        <br />
        <input type="checkbox" id="python" onChange={handelSkills}  value="python"/>
        <label htmlFor="python">PYTHON</label>
        <h1>{skill.toString()}</h1>
        </>
    )
}
export default Skills;