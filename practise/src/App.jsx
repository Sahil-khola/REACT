import Arry from "./component/Arry";
import Obj from "./component/obj";

function App() {
  const clgName = [
    {
      name: "Raj",
      age: 20,
      city: "Delhi",
    },
    {
      name : 'Aman',
      age : 21,
      city : 'Mumbai',
    },
    {
      name: "Rohan",
      age: 22,
      city: "Banglore",
    },
  ]
  let obj = {
    name : 'Raj',
    age : 20,
    city : 'Delhi',
  }
  return (
    <div>
      {/* <Arry name={clgName} /> */}
      <Obj name={obj} />
    </div>
  );
}
export default App;
