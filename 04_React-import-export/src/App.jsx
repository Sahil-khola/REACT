import Login, { Profile, Setting, UserKey } from "./UserComponent"

function App() {

  return (
  <>
  <h1>Importing and exporting Component </h1>
  <Login />
  <Profile/>
  <Setting />
  <h1>{UserKey}</h1>
  </>
  )
}

export default App
