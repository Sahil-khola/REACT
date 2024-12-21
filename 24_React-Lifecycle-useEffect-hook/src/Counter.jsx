import { useEffect } from "react";

function Counter({count, data}) {
    useEffect(()=>{
        console.log('mounting phase only');
    },[])

    useEffect(()=>{
        console.log('update phase only',count);
    },[count])
    
    useEffect(()=>{
       return ()=>{
           console.log('unmounting phase only');
       }
    },[])
    return(
        <>
         <h1>Counter: {count}</h1>
         <h1>Counter: {data}</h1>
        </>
    )
}
export default Counter;