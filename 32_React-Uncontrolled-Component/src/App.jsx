import { useRef } from "react";

function App() {
  function submitForm(event) {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    console.log(user);
    const password = document.querySelector("#pass").value;
   console.log(password);
  }
  function submitFormRef(event) {
    event.preventDefault();
    const user = userRef.current.value
    const password = passwordRef.current.value
    console.log(user,password);
    
  }
  const userRef = useRef();
  const passwordRef = useRef();
  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={submitForm}>
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password " />
        <br />
        <br />
        <button>Submit </button>
       </form>
       <hr />
      <h1>Uncontrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={submitFormRef}>
        <input type="text" placeholder="Enter Name" ref={userRef} id="user" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password " ref={passwordRef} id="pass" />
        <br />
        <br />
        <button>Submit Ref</button>
      </form>
    </>
  );
}

export default App;
