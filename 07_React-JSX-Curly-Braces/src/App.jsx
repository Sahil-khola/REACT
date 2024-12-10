function App() {
  const name = "SAHIL KHOLA ";

  const userObj = {
    name: "Sahil",
    email: "khola@gmail.com",
    age: 23,
  };

  const userArr = ["sourav", "karan", "dhruv"];

  let x = 10;
  let y = 20;
  let path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_YorWFDWE7luNnwWVx-ygomn80lY8g5-AA&s"
  
  function fruit() {
    return "apple";
  }

  function sum(a, b) {
    return a + b;
  }

  function operator(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }

  return (
    <>
      <h1>JSX with Curly Braces</h1>
      <h1>{name ? name : "user not found"}</h1>
      <h1>{x + y}</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(2, 3)}</h1>
      <h1>{operator(200, 50, "-")}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userArr[1]}</h1>
      <input type="text" value={name}  id={name}/>
      <br />
      <img
       src={path} />
    </>
  );
}

export default App;
