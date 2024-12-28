function User({displayName,name,getUser}) {
    return(
        <>
        <div>
            <button onClick={()=>displayName(name)}>Display name</button>
            <button onClick={()=>getUser()}>get user</button>
            
        </div>
        </>
    )
}
export default User;