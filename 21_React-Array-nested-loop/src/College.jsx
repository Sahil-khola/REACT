import Student from "./Student";

function AllInformation({ college }) {
  return (
    <div
      style={{
        border: "3px  solid black",
        margin: "10px",
        padding: "10px",
        backgroundColor: "#cccc",
      }}
    >
      <h1>Name: {college.name}</h1>
      <ul>
        <li>City: {college.city}</li>
        <li>Website: {college.website}</li>
        <h3>Student</h3>
        <h6>
          {college.students.map((student,index) => (
            <Student student={student} key={index} />
          ))}
        </h6>
      </ul>
    </div>
  );
}

export default AllInformation;
