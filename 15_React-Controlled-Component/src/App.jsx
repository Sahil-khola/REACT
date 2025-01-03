import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>CONTROLED COMPONENT</h1>
      <form action="" method="get">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <br />
        <button
          type="reset"
          onClick={() => {
            setName(""), setEmail(""), setPassword("");
          }}
        >
          Clear
        </button>
      </form>
      <p>Name :{name}</p>
      <p>Email :{email}</p>
      <p>Password :{password}</p>
    </>
  );
}
export default App;

