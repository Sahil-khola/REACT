function User({data}) {
    return(
        <div style={
            {
                border: "2px solid green",
                padding: "10px",
                margin:"10px",
                width:"500px",
                borderRadius:"10px"
            }
        }>
        <h1>Name : {data.name}</h1>
        <h1>Age : {data.age}</h1>
        <h1>Email : {data.email}</h1>
        </div>
    )
}
export default  User