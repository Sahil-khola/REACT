import AllInformation from "./College";

function App() {
  const collegeData = [
    {
      name: "MDU",
      city: "Rohtak",
      website: "www.mdu.ac.in",
      students: [
        {
          name: "Rahul",
          age: 21,
          email: "rahul@gmail.com",
        },
        {
          name: "Rohit",
          age: 22,
          email: "rohit@gmail.com",
        },
        {
          name: "Ravi",
          age: 23,
          email: "ravi@gmail.com",
        },
      ],
    },
    {
      name: "IIT DELHI",
      city: "Delhi",
      website: "www.mdu.ac.in",
      students: [
        {
          name: "Rahul",
          age: 21,
          email: "rahul@gmail.com",
        },
        {
          name: "Rohit",
          age: 22,
          email: "rohit@gmail.com",
        },
        {
          name: "Ravi",
          age: 23,
          email: "ravi@gmail.com",
        },
      ],
    },
    {
      name: "NIT",
      city: "Kurukshetra",
      website: "www.mdu.ac.in",
      students: [
        {
          name: "Rahul",
          age: 21,
          email: "rahul@gmail.com",
        },
        {
          name: "Rohit",
          age: 22,
          email: "rohit@gmail.com",
        },
        {
          name: "Ravi",
          age: 23,
          email: "ravi@gmail.com",
        },
      ],
    },
  ];
  return (
    <>
      {collegeData.map((college,index) => (
        <AllInformation college={college} key={index} />
      ))}
    </>
  );
}

export default App;
