import UserProfile from "./UserProfile"
import './CSS/Style.css'

function App() {

  return (
    <>
    <h1 className="heading">Style With CSS Module in React Js</h1>
    <div className="main">
    <UserProfile nam = "Khola" pro='Student' />
    <UserProfile nam = "Sahil" pro='Student' />
    <UserProfile nam = "Sourav" pro='Student' />
    <UserProfile nam = "Karan" pro='Student' />
    <UserProfile nam = "bhupati" pro='Student' />
    </div>
    </>
  )
}

export default App
