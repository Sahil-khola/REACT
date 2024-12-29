function App() {
  async function handelSubmit() {
   await new Promise((res => setTimeout(res, 2000)));
   console.log("Form Submitted");
  }
   return (
     <div>
       <form onSubmit={handelSubmit}>
         <input type="text" placeholder="username" />
         <br /><br />
         <input type="password" placeholder="password"/>
         <br /><br />
         <button>Submit</button>
       </form>
     </div>
   );
 } 
 export default App;