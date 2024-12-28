import User from "./User"


function App() {

  function displayName(name) {
    alert(name)
  }

  function getUser() {
    alert("get function call")
  }
  return (
    <>
    <h1>Pass Funcction in Component as Props</h1>
    <User displayName={displayName} name='Sahil 'getUser={getUser}/>
    <User displayName={displayName} name = 'khola'/>
    </>
  )
}

export default App
