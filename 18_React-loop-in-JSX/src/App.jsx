function App() {
  const userData = [
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
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((userData)=>{
            return (
              <tr key={userData.id}>
                <td>{userData.id}</td>
                <td>{userData.name}</td>
                <td>{userData.age}</td>
                <td>{userData.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <table border={1}>
        <thead>
         <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sahil</td>
            <td>20</td>
            <td>Gurugram</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sahil</td>
            <td>20</td>
            <td>Gurugram</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sahil</td>
            <td>20</td>
            <td>Gurugram</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sahil</td>
            <td>20</td>
            <td>Gurugram</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
export default App;
