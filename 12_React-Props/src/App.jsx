import College from "./Arry";
import Oobj from "./Obj";
import User from "./User";

function App() {
  const collegeName = ['mdu','sgt','amity']
  let Name = "Sahil khola"
  let age = 20;
  let emailId = 'khola@gmail.com'
  const Obj1 = {
    Name : 'Rao shabh',
    Age : "20",
    Class : "12th"
  }
  return(
    <>
    <h1>Props in array</h1>
    <College AllName = {collegeName}/>
    <User Name = 'KHOLA' age ={20} emailId={'wwwkhola.com'}/>
    <User Name={Name} age={age} emailId={emailId}/>
    <Oobj new1 = {Obj1}/>
    </>
  )
  
}export default App;