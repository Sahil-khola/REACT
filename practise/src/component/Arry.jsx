function Arry({name}){
//   [name, age, city] = name;
    return(
        <>
        <h2> Name : {name[0].name} </h2>
        <h2> Age : {name[0].age}</h2>
        <h2> City : {name[0].city}</h2>
        <hr />
        <h2> Name : {name[1].name} </h2>
        <h2> Age : {name[1].age}</h2>
        <h2> City : {name[1].city}</h2>
        <hr />
        <h2> Name : {name[2].name} </h2>
        <h2> Age : {name[2].age}</h2>
        <h2> City : {name[2].city}</h2>
        <hr />
        </>
    )
}
export default Arry;
