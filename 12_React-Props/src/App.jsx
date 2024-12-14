import { useState } from 'react'
import User from './User'
import College from './College'
import Student from './Student'


function App() {
//  let name = "Sahil"
//  let age = 21;
//  let email = "sahil@gmail.com"

let userObj = {
  name : 'Sahil khola',
  age : 20,
  email : 'sahilkhola2004@gmail.com'
}
let userObj2 = {
  name : 'karan',
  age : 19,
  email : 'karan2004@gmail.com'
}
let userObj3 = {
  name : 'Sourav',
  age : 22,
  email : 'bhupati@gmail.com'
}

let collegeName = ['MDU','DU','NIT','LET']
const [student,setStudent]= useState("sam")
  return (
   <>
   <h1>Props in React js</h1>
   <hr />
   {/* <h2>{name}</h2> */}
   {/* <User name = "Sahil" age= {20} email = "khola@gmail.com"/> */}
   {/* <User name = {name} age= {age} email = {email}/> */}
   <User user={userObj}/>
   <hr />
   <User user={userObj2}/>
   <hr />
   <User user={userObj3}/>
   <hr />
   <College name = {collegeName}/>
   <hr />
   <Student name="Sahil" />
   <hr />
   <Student name={student} />
   </>
  )
}

export default App
