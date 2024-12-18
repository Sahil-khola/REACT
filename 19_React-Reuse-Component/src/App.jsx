import User from "./User";

function App() {
  const userName = [
    {
      name: "Sahil",
      age: "20",
      email: "khola@gmail.com",
      id: 1,
    },
    {
      name: "karan",
      age: "29",
      email: "karan@gmail.com",
      id: 2,
    },
    {
      name: "sourav",
      age: "40",
      email: "sourav@gmail.com",
      id: 3,
    },
  ];
  return (
    <>
      <h1>Reuse Component in Loop</h1>
      {
        userName.map((user)=>(
          <div key={user.id}>
          <User data = {user} />
          </div>
        ))
      }
    </>
  );
}

export default App;
