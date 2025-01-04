function User({ data }) {
  return (
    <div>
     {
        data.map((user)=>{
        return (
          <div
            key={user.id}
            style={{ border: "2px solid black", margin: "10px" }}
          >
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>City: {user.city}</h1>
          </div>
        );
        })
     }
    </div>
  );
}
export default User;
