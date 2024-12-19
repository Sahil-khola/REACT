import { use } from "react";

function App() {
  const userData = [
    {
      Name: "Sahil khola",
      Age: "20",
      Email: "@gmail.com",
      Id: 1,
    },
    {
      Name: "karan",
      Age: "22",
      Email: "karan@gmail.com",
      Id: 2,
    },
    {
      Name: "Sourav",
      Age: "23",
      Email: "bhupati@gmail.com",
      Id: 3,
    },
    {
      Name: "tanishq",
      Age: "25",
      Email: "tanishq@gmail.com",
      Id: 4,
    },
    {
      Name: "nishu",
      Age: "20",
      Email: "nishant@gmail.com",
      Id: 5,
    }
  ];
  return (
    <>
      <h1>Loop in jsx with Map function </h1>
      <table border={3}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>AGE</td>
            <td>EMAIL</td>
          </tr>
        </thead>
        <tbody>
         {
          userData.map((user)=>(
            <tr key={user.Id}>
            <td>{user.Id}</td>
            <td>{user.Name}</td>
            <td>{user.Age}</td>
            <td>{user.Email}</td>
          </tr>
          ))
         }
        </tbody>
      </table>

      {/* <table border={3}>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>EMAIL</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Sahil</td>
          <td>20</td>
          <td>khola@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Sahil</td>
          <td>20</td>
          <td>khola@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Sahil</td>
          <td>20</td>
          <td>khola@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Sahil</td>
          <td>20</td>
          <td>khola@gmail.com</td>
        </tr>
      </table> */}
    </>
  );
}
export default App;
