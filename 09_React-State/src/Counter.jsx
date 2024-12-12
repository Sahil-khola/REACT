import { useState } from "react"

function Counter() {
    const [count,setCount]=useState(0)
    function changeNum() {
        setCount(count+1)
    }
    const [rCount,setRcount]=useState(10)
    function changeNum2() {
        setRcount(rCount-1)
    }
    return(
        <>
        <h1>Counter:{count}</h1>
        <h1>Counter:{rCount}</h1>
        <button onClick={changeNum}>increase Value</button>
        <button onClick={changeNum2}>decreace Value</button>
        </>
    )
}
export default Counter