import User from "./User";

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
    return(
        <>
        <h1>Reuse Component in react</h1>
        {
            userData.map((data)=>(
                <User udd = {data} />
            ))
        }
        </>
    )
}
export default App;