function App() {
 
  const handelSubmit=()=>{
    new Promise(res=>setTimeout(res,2000))
  }

  return (
    <div>
      <h1>useFormStatus hook in React js</h1>
      <form action="handelSubmit">
        <input type="text" placeholder="Enter Name" />
        <br /><br />
        <input type="text" placeholder="Enter Password" />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;