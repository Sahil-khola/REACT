import {useState } from "react";
import College from "./Arry";
import Oobj from "./Obj";
import User from "./User";
import Student from "./Student";

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
  const [count,setCount]= useState("karan")
  return(
    <>
    <h1>Props in array</h1>
    <College AllName = {collegeName}/>
    <User Name = 'KHOLA' age ={20} emailId={'wwwkhola.com'}/>
    <User Name={Name} age={age} emailId={emailId}/>
    <Oobj new1 = {Obj1}/>
    {
     count && <Student Name = {count}/>
    }
    <button onClick={()=>{setCount("khola")}}>Update student name</button>
    </>
  )
  
}export default App;