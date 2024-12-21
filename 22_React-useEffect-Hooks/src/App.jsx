import { useState ,useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  function counterFunc(){
    console.log("Counter function called",count); 
  }

  useEffect(()=>{
    counterFunc();
  },[count,data])
  return(
    <>
    <h1>use Effect hooks in React</h1>
    <button onClick={(()=>{setCount(count+1)})}>Counter: {count}</button>  
    <button onClick={(()=>{setData(data+1)})}>Data: {data}</button>  
    </>
  )
}
export default App;

/*
Handel dependecy

useEffect(()=>{
  // call every time
})

useEffect(()=>{
  // call only once
},[])

useEffect(()=>{
  // call only single state change
},[State])

useEffect(()=>{
  // call only both state change
},[State,state2])

useEffect(()=>{
  // call on change of props
},[props1,props2])
*/