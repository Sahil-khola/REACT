// function User({name,age,email}) {
function User({user}) {
    
    return(
        <>
        <h1>Name : {user.name}</h1>
        <h1>Age : {user.age}</h1>
        <h1>Email : {user.email}</h1>
        </>
    )
}
export default User;