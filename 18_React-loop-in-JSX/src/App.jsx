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
      <h1>Loop in JSX with Map Function</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>NAME</td>
            <td>AGE</td>
            <td>EMAIL</td>
          </tr>
        </thead>
        <tbody>
        {
          userName.map((item)=>(
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            
          </tr>
          ))
        }
        </tbody>
      </table>



      <h1>Dummy data</h1>
      <table border={1}>
        <tr>
          <th> ID </th>
          <th> Name </th>
          <th> Email </th>
          <th> age </th>
        </tr>
        <tr>
          <td>1</td>
          <td>Sahil</td>
          <td>sahil@gmail.com</td>
          <td>20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>karan</td>
          <td>karan@gmail.com</td>
          <td>29</td>
        </tr>
        <tr>
          <td>3</td>
          <td>sourav</td>
          <td>sourve@gmail.com</td>
          <td>40</td>
        </tr>
      </table>
    </>
  );
}

export default App;
