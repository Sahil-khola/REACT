import { useState } from "react";

function Skills() {
  const [val,setVal] = useState([]);
  function valHandel(event) {
    console.log((event.target.value,event.target.checked));
  }
  return (
    <>
      <form action="" method="get">
        <input type="checkbox" name="php" id="php" onChange={valHandel} />
        <label htmlFor="php">PHP</label>
        <br />
        <br />
        <input type="checkbox" name="js" id="js" onChange={valHandel}  />
        <label htmlFor="js">JS</label>
        <br />
        <br />
        <input type="checkbox" name="node" id="node" onChange={valHandel}  />
        <label htmlFor="node">NODE</label>
        <br />
        <br />
        <input type="checkbox" name="java" id="java" onChange={valHandel}  />
        <label htmlFor="java">JAVA</label>
      </form>
      <h1>{val.toString()}</h1>
    </>
  );
}
export default Skills;
