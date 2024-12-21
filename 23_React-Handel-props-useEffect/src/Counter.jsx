import { useEffect } from "react";

function Counter({count,data}) {
    function callOnce() {
        console.log("Call Once", count);
    }
    
    // useEffect(() => {
    //     callOnce();
    // }, [count]);

    function handelData() {
       console.log('data call',data);
    }

    useEffect(() => {
        handelData();
        callOnce();
    }, [data,count]);




  return (
   <>
   <h1>Counter Value :{count} </h1>
   <h1>Data Value :{data} </h1>
   </>
  );
}
export default Counter;