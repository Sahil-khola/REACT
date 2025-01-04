import User from "./User";

function App() {
  const information = [
    {
      name: "John",
      age: 25,
      city: "New York",
      id: 1,
    },
    {
      name: "Jane",
      age: 30,
      city: "Los Angeles",
      id: 2,
    },
    {
      name: "Bob",
      age: 35,
      city: "Chicago",
      id: 3,
    },
    {
      name: "Alice",
      age: 40,
      city: "San Francisco",
      id: 4,
    },
  ];
  return (
    <div>
      <h1>REUSE COMPONENT IN REACT JS </h1>
      <User data={information} />
    </div>
  );
}
export default App;
