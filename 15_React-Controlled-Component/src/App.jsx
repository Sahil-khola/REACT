import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <h1>Controlled Component</h1>
      <form action="" method="get">
        <input type="text"value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Enter Name" />
        <br />
        <br />
        <input type="password"value={password} onChange={(event)=>{setPassword(event.target.value)}}  placeholder="Enter password" />
        <br />
        <br />
        <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter email" />
        <br />
        <br />
        <button>Submit</button>
        <button onClick={()=>{setName("");setPassword("");setEmail("")}} > Clear </button>
        <h1>{name}</h1>
        <h1>{password}</h1>
        <h1>{email}</h1>
      </form>
    </>
  );
}

export default App;
