function User({udd}) {
    return(
    <div style={{border:'5px solid black', marginBottom:"4px"}}>
         <div key={udd.Id}>
        <h1>Name : {udd.Name}</h1>
        <h1>Age : {udd.Age}</h1>
        <h1>Email : {udd.Email}</h1>
        </div>
    </div>
    )
}
export default User;