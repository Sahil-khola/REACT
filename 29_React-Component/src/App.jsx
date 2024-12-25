 import styled from 'styled-components'
 function App() {
 
  // const Heading= styled.h2`
  // color:red;
  // border:2px solid red;
  // border-radius:5px;
  // margin:20px;
  // padding:20px
  // `

  const Heading=styled.h1({
    color:red,
    border:"2px solid red",
    borderRadius:"5px",
    margin:"20px",
    padding:"20px",
  })
  return (
    <>
     <h1>Style Component</h1>
     <Heading>hello heading</Heading>
    </>
  )
}

export default App
h
