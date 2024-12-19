// import { useState } from "react";
// import { use } from "react";

// function App() {
//   const [name,setName]=useState("")
//   const [password,setPassword]=useState(" ")
//   const [email,setEmail]=useState(" ")
 
//   function nameHandel(event) {
//     setName(event.target.value)    
//   }
//   function passHandel(event) {
//     setName(event.target.value)    
//   }
//   function emailHandel(event) {
//     setName(event.target.value)    
//   }
 
//   return(
//     <>
//     <h1> Controlled Component </h1>
//      <form action="" method="get">
//       <label htmlFor="name">Name  </label>
//       <input type="text" name="Fname" id="name" onChange={nameHandel} />
//       <br />
//       <br />
//       <label htmlFor="ps">Password  </label>
//       <input type="password" name="Fname" id="ps" onChange={passHandel}  />
//       <br />
//       <br />
//       <label htmlFor="em">Email  </label>
//       <input type="text" name="Fname" id="em" onChange={emailHandel} />
//       <button >clear</button>
//      </form>
//      <h3>{name}</h3>
//      <h3>{password}</h3>
//      <h3>{email}</h3>
//     </>
//   )
// }
// export default App;
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